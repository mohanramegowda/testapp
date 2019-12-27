import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddFieldDialogComponent } from '@shared/components/add-field-dialog/add-field-dialog.component';

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
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  OnCreateNewTemplate() {
    const dialogRef = this.dialog.open(AddFieldDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
