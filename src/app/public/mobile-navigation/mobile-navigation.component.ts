import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)'}),
          animate('400ms', style({transform: 'translateX(0)'}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)'}),
          animate('400ms', style({transform: 'translateX(-100%)'}))
        ])
      ]
    )
  ]
})
export class MobileNavigationComponent implements OnInit, OnDestroy {
  constructor() { }
  @Input() ShowingMobileNavigation:boolean = false;

  @Output() SelectedMenuItem = new EventEmitter<boolean>();

  ngOnInit() {
  }

  SelectMenuItem(){
    this.SelectedMenuItem.emit(true);
  }

  ngOnDestroy(){
    this.ShowingMobileNavigation = false;
  }
}
