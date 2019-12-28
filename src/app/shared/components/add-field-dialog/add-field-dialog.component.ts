import { Component, OnInit, Inject, AfterViewInit, ChangeDetectorRef } from '@angular/core';
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
export class AddFieldDialogComponent implements OnInit, AfterViewInit {

  validations: any[] = [
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

  selectedValidations: any[];
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddFieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private cdr: ChangeDetectorRef) {
    if (!this.form) {
      this.form = new FormGroup(
        {
          name: new FormControl('', [Validators.required]),
          type: new FormControl('', [Validators.required]),
          label: new FormControl('', [Validators.required]),
          defaultValue: new FormControl(''),
          validation: new FormControl([])
        }
      )
    }
  }

  ngOnInit() {
    this.selectedValidations = [];
    const validationControlObj = this.form.controls['validation'];
    if (validationControlObj) {
      validationControlObj.setValue(this.selectedValidations);
      this.cdr.detectChanges();
    }
  }

  ngAfterViewInit(): void {
    if (this.data) {
      this.form.setValue(this.data);
      this.cdr.detectChanges();
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  compare(c1: { name: string, message: string }, c2: { name: string, message: string }) {
    return c1 && c2 && c1.name === c2.name;
  }

}
