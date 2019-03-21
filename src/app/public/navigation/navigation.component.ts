import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  toggleIcon: boolean = false;
  Authentication: string = "Sign in/Register";
  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  toggle() {
    this.toggleIcon = !this.toggleIcon
  }

  MobileMenuSelected() {
    this.toggle();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
