import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCategoryService } from '@app/services/product-category.service';
import { TreeItemNode } from '@app/models/tree-item-node';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from '@app/services/product-service.service';
import { IProduct } from '@app/models/product';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-products-preview',
  templateUrl: './products-preview.component.html',
  styleUrls: ['./products-preview.component.scss']
})
export class ProductsPreviewComponent implements OnInit {
  public sidenavOpen: boolean = true;
  public viewCol: number = 25;
  public productCategories: TreeItemNode[];
  public products: IProduct[];
  constructor(private router: Router,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute, private productCategoryService: ProductCategoryService,
    private productsService: ProductService) { }

  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
  }

  ngOnInit() {
    this.productCategoryService.getAllProductCategories().subscribe(data => {
      this.productCategories = data;
      this.productsService.getAllProducts()
        .pipe(
          map(products => {
            return products.map(product => {
              if (product.image)
                product.image = this.sanitizer.bypassSecurityTrustResourceUrl(product.image);
              return product;
            })
          })
        )
        .subscribe(
          products => {
            this.products = products;
          }
        )
    });
  }

  public onChangeCategory(event) {
    if (event) {
      this.productsService.getAllProductsByCategoryId(event)
        .pipe(
          map(products => {
            return products.map(product => {
              if (product.image)
                product.image = this.sanitizer.bypassSecurityTrustResourceUrl(product.image);
              return product;
            })
          })
        )
        .subscribe(
          products => {
            this.products = products;
          }
        )
    }
  }

}
