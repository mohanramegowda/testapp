import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDrawerContent, MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenavContainer, { static: false }) sideNavContainer;
  @ViewChild('thisIsContent', { static: false }) sideNav;
  toggleCart: boolean = true;
  templateName: string;
  navItems = [
    { link: '/home', title: 'Home' },
    { link: '/get-started', title: 'Get Started' }
  ];
  constructor(private router: Router, private route: ActivatedRoute,) {
    this.templateName = this.route.snapshot.paramMap.get('name');
   }

  ngOnInit() {
    //todo get cart Items on start to  update the cart items length
  }

  ngAfterViewInit() {
    this.sideNavContainer._element.nativeElement.className = 'mat-drawer-container-ext';
    const classes = this.sideNav.nativeElement.offsetParent.className.replace('mat-drawer-content', 'mat-drawer-content-ext');
    this.sideNav.nativeElement.offsetParent.className = classes;
  }

  getCartItems() {
    this.toggleCart = !this.toggleCart;
    //todo get Cart Items from Database
  }

  showProducts() {
    this.router.navigate(['demo/products']);
  }

}
