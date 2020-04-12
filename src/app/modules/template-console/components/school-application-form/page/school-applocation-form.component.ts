import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog, MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { AddFieldDialogComponent } from '@shared/components/add-field-dialog/add-field-dialog.component';
import { FormGroup } from '@angular/forms';
import { EditSectionTitleDialogComponent } from '../components/edit-section-title-dialog/edit-section-title-dialog.component';
import { FlatTreeControl } from '@angular/cdk/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TreeItemNode } from '@app/models/tree-item-node';
import { TreeItemFlatNode } from '@app/models/tree-item-flat-node';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";
import { Observable } from 'rxjs/internal/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCategoryService } from '@app/services/product-category.service';

/**
 * The Json object for to-do list data.
 */
const TREE_DATA = {};

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TreeItemNode[]>([]);

  get data(): TreeItemNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TreeItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(TREE_DATA, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TreeItemNode`.
   */
  buildFileTree(obj: { [key: string]: any }, level: number): TreeItemNode[] {
    return Object.keys(obj).reduce<TreeItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TreeItemNode();
      node.name = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.name = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  /** Add an item to to-do list */
  insertItem(parent: TreeItemNode, name: string) {
    if (parent.children) {
      parent.children.push({ name: name } as TreeItemNode);
      this.dataChange.next(this.data);
    }
  }

  insertRootItem(node: TreeItemNode) {
    if (this.data) {
      this.data.push(node);
      this.dataChange.next(this.data);
    }
  }

  insertChildItem(parent: TreeItemNode, child: TreeItemNode) {
    if (parent.children) {
      parent.children.push(child);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TreeItemNode, name: string) {
    node.name = name;
    this.dataChange.next(this.data);
  }

  updateNode(node: TreeItemNode, newNode: TreeItemNode) {
    Object.assign(node, newNode);
    this.dataChange.next(this.data);
  }

  updateItemByFlatNode(node: TreeItemFlatNode, name: string) {
    node.name = name;
    this.dataChange.next(this.data);
  }
}

@Component({
  selector: 'app-school-applocation-form',
  templateUrl: './school-applocation-form.component.html',
  styleUrls: ['./school-applocation-form.component.scss'],
  providers: [ChecklistDatabase]
})
export class SchoolApplocationFormComponent implements OnInit {

  ngOnInit(): void {
  }
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<TreeItemFlatNode, TreeItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<TreeItemNode, TreeItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: TreeItemFlatNode | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<TreeItemFlatNode>;

  treeFlattener: MatTreeFlattener<TreeItemNode, TreeItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TreeItemNode, TreeItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TreeItemFlatNode>(true /* multiple */);

  filterNode: TreeItemNode;

  constructor(private _database: ChecklistDatabase, public dialog: MatDialog, private router: Router,
    private route: ActivatedRoute, private productCategoryService: ProductCategoryService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TreeItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.productCategoryService.getAllProductCategories().subscribe((categories: TreeItemNode[]) => {
      this._database.dataChange.next(categories && categories.length ? categories : []);
    })
    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  getLevel = (node: TreeItemFlatNode) => node.level;

  isExpandable = (node: TreeItemFlatNode) => node.expandable;

  getChildren = (node: TreeItemNode): TreeItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TreeItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TreeItemFlatNode) => _nodeData.name === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TreeItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.name === node.name
      ? existingNode
      : new TreeItemFlatNode();
    // flatNode.name = node.name;
    Object.assign(flatNode, node);
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TreeItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    return descendants && descendants.length > 0 ? descAllSelected : false;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TreeItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  treeItemSelectionToggle(node: TreeItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  treeLeafItemSelectionToggle(node: TreeItemFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TreeItemFlatNode): void {
    let parent: TreeItemFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TreeItemFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: TreeItemFlatNode): TreeItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  /** Select the category so we can insert the new item. */
  addNewItem(node: TreeItemFlatNode) {
    const parentNode = this.flatNodeMap.get(node);
    this.AddNewChildCategory(parentNode);
    //this._database.insertItem(parentNode!, '');
    this.treeControl.expand(node);
  }

  addNewRootItem(node: TreeItemNode) {
    if (node) {
      node.children = node.categoryType === 'noChildren' ? node.children : [];
      this._database.data.push(node);
      this._database.dataChange.next(this._database.data);
    }
  }

  RemoveRootItem(node: TreeItemFlatNode) {
    if (node) {
      const nestedNode = this.flatNodeMap.get(node);
      const index = this._database.data.indexOf(nestedNode);
      this._database.data.splice(index, 1);
      this._database.dataChange.next(this._database.data);
      this.productCategoryService.postAllProductCategories(this._database.data).subscribe(d => {
        console.log(d);
      });
    }
  }

  RemoveChildItem(node: TreeItemFlatNode) {
    const parentNode = this.getParentNode(node);
    if (parentNode) {
      const nestedNode = this.flatNodeMap.get(parentNode);
      const nodeToDelete = this.flatNodeMap.get(node);
      const index = nestedNode.children ? nestedNode.children.indexOf(nodeToDelete) : -1;
      nestedNode.children.splice(index, 1);
      this._database.dataChange.next(this._database.data);
      this.productCategoryService.postAllProductCategories(this._database.data).subscribe(d => {
        console.log(d);
      });
    }
    else {
      this.RemoveRootItem(node);
    }
  }

  /** Save the node to database */
  saveNode(node: TreeItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this._database.updateItem(nestedNode!, itemValue);
  }

  changeViewType(event) {
    console.log(event);
    switch (event) {
      case 'filter':
        this.ShowRootsFilter();
        break;
      case 'addNewItem':
        this.AddNewRootCategory();
        break;
      case 'sort':
        break;
    }
  }

  // All actions logic below
  AddNewRootCategory() {
    const node = new TreeItemNode();
    node.isFilter = false;
    node.dialogTitle = 'Enter Product Category Details'
    const dialogRef = this.showDialog(node);

    dialogRef.subscribe(result => {
      this.addNewRootItem(result);
      this.productCategoryService.postAllProductCategories(this._database.data).subscribe(d => {
        console.log(d);
      });
    });
  }

  AddNewChildCategory(node?: TreeItemNode) {
    if (!node)
      node = new TreeItemNode();
    node.isFilter = false;
    node.isEdit = false;
    node.dialogTitle = 'Enter Product Category Details'
    const dialogRef = this.showDialog(node);

    dialogRef.subscribe(result => {
      if (result) {
        result.children = result.categoryType === 'noChildren' ? result.children : [];
        this._database.insertChildItem(node, result!);
        this.productCategoryService.postAllProductCategories(this._database.data).subscribe(d => {
          console.log(d);
        });
      }
    });
  }

  ShowRootsFilter() {
    const node = new TreeItemNode();
    node.isFilter = true;
    node.dialogTitle = 'Filter';
    const dialogRef = this.showDialog(node);

    dialogRef.subscribe(result => {
      if (result) {
        // todo Write Filtering logic later
        this.filterNode = result;
      }
    });
  }

  ShowChildFilter(node: TreeItemNode) {
    node.isFilter = true;
    node.dialogTitle = `Filter Child Nodes of ${node.name}`;
    const dialogRef = this.showDialog(node);

    dialogRef.subscribe(result => {
      if (result) {
        // todo Write child Filtering logic later
        node.children = node.children.filter(ele => {
          return ele.name.includes(result.name)
            && ele.categoryType.includes(result.categoryType)
            && ele.description.includes(result.description)
            && ele.status.includes(result.status)
        })
        this.filterNode = result;
      }
    });
  }

  EditCategory(node?: TreeItemFlatNode) {
    const nestedNode = this.flatNodeMap.get(node);
    nestedNode.isEdit = true;
    nestedNode.dialogTitle = 'Edit Product Category Details';
    const dialogRef = this.showDialog(nestedNode);

    dialogRef.subscribe(result => {
      if (result) {
        result.children = result.categoryType === 'noChildren' ? result.children : [];
        this._database.updateNode(nestedNode!, result);
        this.productCategoryService.postAllProductCategories(this._database.data).subscribe(d => {
          console.log(d);
        });
      }
    });
  }

  CategoryDetailsReadOnly(node?: TreeItemNode) {
    node.isEdit = false;
    node.isReadonly = true;
    node.isFilter = false;
    const dialogRef = this.showDialog(node);
  }

  ManageProducts(node) {
    this.router.navigate(['./products-management'], { relativeTo: this.route });
    // this.router.navigate(['creation-console/template-console/school-application-form/products-management']);
  }

  private showDialog(node?: TreeItemNode): Observable<TreeItemNode> {
    const dialogRef = this.dialog.open(EditSectionTitleDialogComponent, {
      data: node,
      width: "90%"
    });
    return dialogRef.afterClosed()
      .pipe(
        map(data => {
          if (data)
            return new TreeItemNode(
              data.name,
              data.status,
              data.categoryType,
              data.description,
              data.keywords
            );
        }))
  }


}
