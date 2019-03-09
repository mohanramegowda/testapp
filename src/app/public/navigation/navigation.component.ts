import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  toggleIcon:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.toggleIcon = !this.toggleIcon
  }

}
