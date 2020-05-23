import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'ecommerce-management',
  templateUrl: './ecommerce-management-console.component.html',
  styleUrls: ['./ecommerce-management-console.component.scss']
})
export class EcommerceManagementConsoleComponent implements OnInit {

  @ViewChild('sidenav', {static: false}) sideNav: MatSidenav;
  navItems = [

  ];

  constructor() { }

  ngOnInit() {
  }

  onMenuClick() {
    if(this.sideNav){
      this.navItems = [
        { link: 'dashboard', title: 'Dashboard', icon: 'dashboard' },
        { link: 'my-templates', title: 'My Templates', icon: 'folder' },
        { link: 'users', title: 'Users', icon: 'people' },
        { link: 'sales', title: 'Submissions', icon: 'play_for_work' },
        { link: 'template-console', title: 'Template Console', icon: 'play_for_work' }
      ];

      this.sideNav.toggle();
    }    
  }
}
