import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'items-toolbar',
  templateUrl: './items-toolbar.component.html',
  styleUrls: ['./items-toolbar.component.scss']
})
export class ItemsToolbarComponent implements OnInit {
  sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
  sort: string;
  counts = [12, 24, 36];
  count: number;

  viewType:string;

  constructor() { }

  ngOnInit() {
    this.count = this.counts[0];
    this.sort = this.sortings[0];
  }

  public changeCount(count) {
    this.count = count;
  }

  public changeSorting(sort){
    this.sort = sort;
  }

  public changeViewType(viewType){
    this.viewType = viewType;
  }

}
