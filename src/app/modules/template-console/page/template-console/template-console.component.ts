import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-template-console',
  templateUrl: './template-console.component.html',
  styleUrls: ['./template-console.component.scss']
})
export class TemplateConsoleComponent implements OnInit, AfterViewChecked {
// @ViewChild('drawer', {static: false}) drawer:MatDrawer;
navItems = [
  { link: 'parent-login-registration', title: 'Parent Login Registration', icon: 'dashboard' },
  { link: 'student-login-registration', title: 'Student Login Registration', icon: 'folder' },
  { link: 'school-application-form', title: 'School Application Form', icon: 'people' },
  { link: 'application-fee', title: 'Application Fee', icon: 'play_for_work' },
  { link: 'themes', title: 'Themes', icon: 'play_for_work' }
];
  constructor() { }

  ngOnInit() {
    // this.drawer.opened
  }

  ngAfterViewChecked(){
    
  }

}
