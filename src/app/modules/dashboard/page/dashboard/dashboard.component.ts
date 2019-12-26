import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  templateList = [{
    title: 'Swarga Rani'
  },
  {
    title: 'NPS'
  },
  {
    title: 'Baldvin'
  },
  {
    title: 'Gnana Ganga Vidhya Peetha'
  }];

  constructor() { }

  ngOnInit() {
  }

}
