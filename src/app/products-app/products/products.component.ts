import { Component, OnInit, HostListener } from '@angular/core';
import { TreeItemNode } from '@app/models/tree-item-node';
import { IProduct, IProducts } from '@app/models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductCategoryService } from '@app/services/product-category.service';
import { ProductService } from '@app/services/product-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public sidenavOpen: boolean = true;
  public viewCol: number = 25;
  public productCategories: TreeItemNode[];
  public products: IProducts;
  public templateId: number;

  public priceFrom: number = 750;
  public priceTo: number = 1599;
  public slides = [
    { title: 'The biggest sale', subtitle: 'Special for today', },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', },
    { title: 'The biggest sale', subtitle: 'Special for today', },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', },
    { title: 'The biggest sale', subtitle: 'Special for today', }
  ];

  public colors = [
    { name: "#5C6BC0", selected: false },
    { name: "#66BB6A", selected: false },
    { name: "#EF5350", selected: false },
    { name: "#BA68C8", selected: false },
    { name: "#FF4081", selected: false },
    { name: "#9575CD", selected: false },
    { name: "#90CAF9", selected: false },
    { name: "#B2DFDB", selected: false },
    { name: "#DCE775", selected: false },
    { name: "#FFD740", selected: false },
    { name: "#00E676", selected: false },
    { name: "#FBC02D", selected: false },
    { name: "#FF7043", selected: false },
    { name: "#F5F5F5", selected: false },
    { name: "#696969", selected: false }
  ];

  constructor(private router: Router,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute, private productCategoryService: ProductCategoryService,
    private productsService: ProductService) {
    this.templateId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
  }

  ngOnInit() {
    this.products = {
      loading: true,
      message: '',
      products: []
    }
    this.productCategoryService.getAllProductCategories(this.templateId).subscribe(data => {
      this.productCategories = data;
      this.productsService.getAllProducts()
        .pipe(
          map(products => {
            return products.map(product => {
              if (product.images)
                this.createImageFromBlob(product);
              return product;
            })
          })
        )
        .subscribe(
          products => {
            this.products.products = products;
            this.products.loading = false;
            this.products.message = products && products.length === 0 ? 'No Products available' : '';
          }
        )
    });
  }


  public onChangeCategory(event) {
    if (event) {
      this.products.loading = true;
      this.productsService.getAllProductsByCategoryId(event)
        .pipe(
          map(products => {
            return products.map(product => {
              if (product.images) {
                this.createImageFromBlob(product);
              }

              return product;
            })
          })
        )
        .subscribe(
          products => {
            this.products.products = products;
            this.products.loading = false;
            this.products.message = products && products.length === 0 ? 'No Products available in this category' : '';
          }
        )
    }
  }

  createImageFromBlob(product) {
    if (!product.images[0] || (product.images[0] && !product.images[0].data))
      return;

    const unitArray = new Uint8Array(product.images[0].data.data);
    const blob = new Blob([unitArray], { type: "image/jpeg" });
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      product.image = this.sanitizer.bypassSecurityTrustResourceUrl(reader.result.toString());
    }, false);
    if (blob) {
      reader.readAsDataURL(blob);
    }
  }

}
