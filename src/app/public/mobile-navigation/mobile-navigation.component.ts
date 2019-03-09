import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  SelectMenuItem(selected:boolean){
    this.SelectedMenuItem.emit(true);
  }

}
