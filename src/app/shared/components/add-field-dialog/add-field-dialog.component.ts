import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Validators } from '@angular/forms';

export interface DialogData 
{
  name: string,
  type: string, // select in add-field html
  label: string,
  defaultValue: string,
  validation: []
}

// {
//   animal: string;
//   name: string;
// }

// {
//   name: 'required',
//   message: 'User Name is Required'
// }

@Component({
  selector: 'app-add-field-dialog',
  templateUrl: './add-field-dialog.component.html',
  styleUrls: ['./add-field-dialog.component.scss']
})
export class AddFieldDialogComponent implements OnInit {

  validations: string[] = ['email', 'maxLength', 'minLength', 'required'];

  constructor(public dialogRef: MatDialogRef<AddFieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
