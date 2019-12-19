import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ViewChildren, ContentChild, AfterContentInit } from '@angular/core';
import { MatDrawerContent, MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenavContainer, {static: false}) sideNavContainer;
  @ViewChild('thisIsContent', {static: false}) sideNav;

  @ContentChild(MatSidenavContent,{static: false}) sideNavCon;
  navItems = [
    { link: '/home', title: 'Home' },
    { link: '/get-started', title: 'Get Started' },
    { link: '/learn-more', title: 'Learn More' },
    { link: '/support', title: 'Support' },
    { link: '/sign-in', title: 'Sign in' },
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sideNavContainer._element.nativeElement.className = 'mat-drawer-container-ext';
    const classes = this.sideNav.nativeElement.offsetParent.className.replace('mat-drawer-content', 'mat-drawer-content-ext');
    this.sideNav.nativeElement.offsetParent.className = classes;
  }
}
