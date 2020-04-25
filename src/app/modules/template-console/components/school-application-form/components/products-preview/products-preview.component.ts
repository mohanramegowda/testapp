import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-products-preview',
  templateUrl: './products-preview.component.html',
  styleUrls: ['./products-preview.component.scss']
})
export class ProductsPreviewComponent implements OnInit {
  public sidenavOpen:boolean = true;
  public viewCol: number = 25;
  constructor() { }

  @HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
  }

  ngOnInit() {
  }

}
