import { Component, OnInit, Output, EventEmitter } from '@angular/core';

type PaneType = 'left' | 'right';

@Component({
  selector: 'mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss']
})
export class MobileNavigationComponent implements OnInit {
  constructor() { }

  @Output() SelectedMenuItem = new EventEmitter<boolean>();

  ngOnInit() {
  }

  SelectMenuItem(){
    this.SelectedMenuItem.emit(true);
  }

}
