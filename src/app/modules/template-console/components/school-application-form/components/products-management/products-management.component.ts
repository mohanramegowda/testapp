import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { IProduct } from '@app/models/product';
import { Observable } from 'rxjs';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.scss']
})
export class ProductsManagementComponent implements OnInit {
  fields = [
    {
      name: 'UserName',
      type: 'Textbox',
      label: 'User Name',
      defaultValue: '',
      validation: [
        {
          name: 'required',
          message: 'User Name is Required'
        }
      ]
    },
    {
      name: 'Password',
      type: 'Password',
      label: 'Password',
      defaultValue: '',
      validation: [
        {
          name: 'required',
          message: 'Password is Required'
        }
      ]
    },
    {
      name: 'Email',
      type: 'EmailBox',
      label: 'Email',
      defaultValue: '',
      validation: [
        {
          name: 'required',
          message: 'Password is Required'
        },
        {
          name: 'pattern',
          value: '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$',
          message: 'Invalid Email'
        }
      ]
    },
    {
      name: 'Country',
      type: 'Dropdown',
      label: 'Country',
      defaultValue: '',
      validation: [
        {
          name: 'required',
          message: 'Country is Required'
        }
      ]
    }
  ]
  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(["../"], {relativeTo: this.route.parent});
  }

  
  changeViewType($event) {
    this.router.navigate(['add-product'], {relativeTo: this.route});
  }


  private showDialog(product?: IProduct): Observable<IProduct> {
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: product
    });
    return dialogRef.afterClosed();
      // .pipe(
      //   map(data => {
      //     if (data)
      //       return new TreeItemNode(
      //         data.name,
      //         data.status,
      //         data.categoryType,
      //         data.description,
      //         data.keywords
      //       );
      //   }))
  }

  OnActions(event) {
    // todo pending implementation
  }

}
