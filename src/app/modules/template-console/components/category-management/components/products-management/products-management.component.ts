import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { IProduct } from '@app/models/product';
import { Observable } from 'rxjs';
import { ProductService } from '@app/services/product-service.service';

@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.scss']
})
export class ProductsManagementComponent implements OnInit {
  products = [];
  categoryId: number;
  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog,
    private productService: ProductService) { }

  ngOnInit() {
    this.categoryId = parseInt(this.route.snapshot.paramMap.get('category'));
    this.RefreshProducts();
  }

  onSubmit() {
    this.router.navigate(["../"], { relativeTo: this.route.parent });
  }


  changeViewType($event) {
    this.router.navigate(['add-product', { category: this.categoryId, isEdit: true }], { relativeTo: this.route });
  }

  OnActions(event) {
    // todo pending implementation

    switch (event.mode) {
      case "Edit":
        this.router.navigate(['add-product', { category: this.categoryId, product: event.product.id, isEdit: true }], { relativeTo: this.route });
        break;
      case "View":
        this.router.navigate(['add-product', { category: this.categoryId, product: event.product.id, isEdit: false }], { relativeTo: this.route });
        break;
      case "Delete":
        this.productService.deleteProduct(event.product.id).subscribe(() => this.RefreshProducts());
    }
  }

  private RefreshProducts() {
    this.productService.getAllProductsByCategoryId(this.categoryId).subscribe(products => {
      this.products = products;
    })
  }

}
