import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-field-configuration-engine',
  templateUrl: './field-configuration-engine.component.html',
  styleUrls: ['./field-configuration-engine.component.scss']
})
export class FieldConfigurationEngineComponent implements OnInit {

  @Input('fields') fields: Array<any> = [];
  @Output() emitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onActionsClick(mode: string, field: any) {
    this.emitter.emit({
      field: field,
      mode: mode
    });
  }
}
