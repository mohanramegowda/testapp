import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-configuration-engine',
  templateUrl: './field-configuration-engine.component.html',
  styleUrls: ['./field-configuration-engine.component.scss']
})
export class FieldConfigurationEngineComponent implements OnInit {

  @Input('fields') fields: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }
}
