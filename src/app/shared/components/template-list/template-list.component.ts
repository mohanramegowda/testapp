import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {

  @Input('templateList') templateList: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

}
