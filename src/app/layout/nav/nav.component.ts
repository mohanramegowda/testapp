import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

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

}
