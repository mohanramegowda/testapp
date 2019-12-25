import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {

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
  title:'Gnana Ganga Vidhya Peetha'
}];
  constructor() { }

  ngOnInit() {
  }

}
