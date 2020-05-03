import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-side-menu',
  templateUrl: './category-side-menu.component.html',
  styleUrls: ['./category-side-menu.component.scss']
})
export class CategorySideMenuComponent implements OnInit {
  @Input() categories;
  @Input() categoryParentId;
  @Output() change: EventEmitter<any> = new EventEmitter();
  mainCategories;

  constructor() { }

  public ngDoCheck() {
    if (this.categories &&
      (!this.mainCategories ||
        (this.mainCategories && this.mainCategories.length === 0))) {
      this.mainCategories = this.categories.filter(category =>
        category.parentId == this.categoryParentId);
    }
  }

  public stopClickPropagate(event: any) {
    if (window.innerWidth < 960) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  public changeCategory(event) {
    this.change.emit(event);
  }

  ngOnInit() {
  }

}
