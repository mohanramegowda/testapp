import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-school-application-creation-console',
  templateUrl: './school-application-creation-console.component.html',
  styleUrls: ['./school-application-creation-console.component.scss']
})
export class SchoolApplicationCreationConsoleComponent implements OnInit {

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
        { link: 'submissions', title: 'Submissions', icon: 'play_for_work' },
        { link: 'template-console', title: 'Template Console', icon: 'play_for_work' }
      ];

      this.sideNav.toggle();
    }    
  }
}
