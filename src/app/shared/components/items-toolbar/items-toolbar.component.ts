import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTreeFlatDataSource } from '@angular/material';
import { TreeItemFlatNode } from '@app/models/tree-item-flat-node';
import { TreeItemNode } from '@app/models/tree-item-node';

@Component({
  selector: 'items-toolbar',
  templateUrl: './items-toolbar.component.html',
  styleUrls: ['./items-toolbar.component.scss']
})
export class ItemsToolbarComponent implements OnInit {
  @Output() change: EventEmitter<string> = new EventEmitter();
  @Input() dataSource: MatTreeFlatDataSource<TreeItemNode, TreeItemFlatNode>;
  constructor() { }

  ngOnInit() {
  }

  public changeViewType(viewType){
    this.change.emit(viewType);
  }

}
