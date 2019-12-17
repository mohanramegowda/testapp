import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-application-creation-console',
  templateUrl: './school-application-creation-console.component.html',
  styleUrls: ['./school-application-creation-console.component.scss']
})
export class SchoolApplicationCreationConsoleComponent implements OnInit {

  navItems = [
    { link: 'dashboard', title: 'Dashboard', icon: 'dashboard' },
    { link: 'my-templates', title: 'My Templates', icon: 'folder' },
    { link: 'users', title: 'Users', icon: 'people' },
    { link: 'submissions', title: 'Submissions', icon: 'play_for_work' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
