import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleBars(ent){
    let tar = ent.tartget;
  }

}
