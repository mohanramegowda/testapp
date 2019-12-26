import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnCreateNewTemplate() {
    this.router.navigate(['creation-console/template-console']);
  }
}
