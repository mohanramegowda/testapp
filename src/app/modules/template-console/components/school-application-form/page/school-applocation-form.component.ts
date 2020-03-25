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

/**
 * The Json object for to-do list data.
 */
const TREE_DATA = {
  Groceries: {
    'Almond Meal flour': null,
    'Organic eggs': null,
    'Protein Powder': null,
    Fruits: {
      Apple: null,
      Berries: ['Blueberry', 'Raspberry'],
      Orange: null
    }
  },
  Reminders: [
    'Cook dinner',
    'Read the Material Design spec',
    'Upgrade Application to Angular'
  ]
};

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
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  /** Add an item to to-do list */
  insertItem(parent: TreeItemNode, name: string) {
    if (parent.children) {
      parent.children.push({ item: name } as TreeItemNode);
      this.dataChange.next(this.data);
    }
  }

  insertRootItem(node: TreeItemNode) {
    if (this.data) {
      this.data.push(node);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TreeItemNode, name: string) {
    node.item = name;
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

  filterNode: TreeItemFlatNode;

  constructor(private _database: ChecklistDatabase, public dialog: MatDialog) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TreeItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  getLevel = (node: TreeItemFlatNode) => node.level;

  isExpandable = (node: TreeItemFlatNode) => node.expandable;

  getChildren = (node: TreeItemNode): TreeItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TreeItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TreeItemFlatNode) => _nodeData.item === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TreeItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
      ? existingNode
      : new TreeItemFlatNode();
    flatNode.item = node.item;
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
  todoItemSelectionToggle(node: TreeItemFlatNode): void {
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
  todoLeafItemSelectionToggle(node: TreeItemFlatNode): void {
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
    this._database.insertItem(parentNode!, '');
    this.treeControl.expand(node);
  }

  addNewRootItem(node: TreeItemNode) {
    node.children = [];
    this._database.data.push(node);
    this._database.dataChange.next(this._database.data);
    //this.treeControl.expand(node);
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
        this.showFilters();
        break;
      case 'addNewItem':
        this.ShowAddCategoryDialog();
        break;
      case 'sort':
        break;
    }
  }

  showFilters() {
    this.showDialog({});
  }

  ShowAddCategoryDialog() {
    const node = new TreeItemNode();
    const dialogRef = this.dialog.open(EditSectionTitleDialogComponent, {
      data: node
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        node.item = result.title;
        this.addNewRootItem(node);
      }
    });
  }

  showDialog(section) {
    const dialogRef = this.dialog.open(EditSectionTitleDialogComponent, {
      data: section
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        section.title = result.title;
        this.filterNode = result;
        // this.sections.push(section);
      }
    });
  }



}
