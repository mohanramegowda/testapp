import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddFieldDialogComponent } from '@shared/components/add-field-dialog/add-field-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.scss']
})
export class LoginRegistrationComponent implements OnInit {
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
    },
  ]

  subscription: Subscription;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  OnCreateNewTemplate() {
    const dialogRef = this.dialog.open(AddFieldDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.fields.push(result);
      }
    });
  }

  OnActions(event) {
    if (event) {
      switch (event.mode) {
        case 'Edit':
          this.editTemplate();
          break;
        case 'Delete':
          this.fields.splice(this.fields.indexOf(event.field), 1);
          break;
      }
    }
    console.log(event);
  }

  private editTemplate() {
    // todo write logic to edit exsting item in the array and send field to dialog
    const dialogRef = this.dialog.open(AddFieldDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.fields.push(result);
      }
    });
  }
}
