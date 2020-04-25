import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { IProduct } from '@app/models/product';
import { Observable } from 'rxjs';
import { AddProductComponent } from '../add-product/add-product.component';
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
    this.productService.getAllProductsByCategoryId(this.categoryId).subscribe(products => {
      this.products = products;
    })
  }

  onSubmit() {
    this.router.navigate(["../"], {relativeTo: this.route.parent});
  }

  
  changeViewType($event) {
    this.router.navigate(['add-product', {category: this.categoryId}], {relativeTo: this.route});
  }

  OnActions(event) {
    // todo pending implementation
  }

}
