import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

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
  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }
  @Input() ShowingMobileNavigation:boolean = false;

  @Output() SelectedMenuItem = new EventEmitter<boolean>();

  ngOnInit() {
  }

  SelectMenuItem(){
    this.SelectedMenuItem.emit(true);
  }

  toggleAuthentication() {
    
    if (this.authenticationService.currentUserValue) {
      this.authenticationService.logout();
    }
    this.SelectMenuItem();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(){
    this.ShowingMobileNavigation = false;
  }
}
