import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';

export interface DialogData {
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

  validations = [
    {
      name: 'email',
      message: 'Invalid Email'
    },
    {
      name: 'maxLength',
      message: 'Number of Charactors exceeds the limit'
    },
    {
      name: 'minLength',
      message: 'Insufficient number of charactors'
    },
    {
      name: 'required',
      message: 'This Field is required'
    }
  ];

  //fieldType = new FormControl('', [Validators.required]);
  constructor(public dialogRef: MatDialogRef<AddFieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public form: FormGroup) {
    this.form = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        type: new FormControl('', [Validators.required]),
        label: new FormControl('', [Validators.required]),
        defaultValue: new FormControl('', [Validators.required]),
        validation: new FormControl([])
      }
    )
  }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
