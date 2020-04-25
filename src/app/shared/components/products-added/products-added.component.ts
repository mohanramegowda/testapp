import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-added',
  templateUrl: './products-added.component.html',
  styleUrls: ['./products-added.component.scss']
})
export class ProductsAddedComponent implements OnInit {

  @Input('products') products: Array<any> = [];
  @Output() emitter = new EventEmitter();
  public viewCol: number = 25;
  constructor() { }

  ngOnInit() {
  }

  onActionsClick(mode: string, product: any) {
    this.emitter.emit({
      product: product,
      mode: mode
    });
  }

}
