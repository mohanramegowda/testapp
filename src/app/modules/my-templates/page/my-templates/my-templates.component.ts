import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-templates',
  templateUrl: './my-templates.component.html',
  styleUrls: ['./my-templates.component.scss']
})
export class MyTemplatesComponent implements OnInit {

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
