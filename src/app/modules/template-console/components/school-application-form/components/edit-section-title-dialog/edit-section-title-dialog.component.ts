import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { SectionDialogData } from '@app/models/section-dialog-data';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-edit-section-title-dialog',
  templateUrl: './edit-section-title-dialog.component.html',
  styleUrls: ['./edit-section-title-dialog.component.scss']
})
export class EditSectionTitleDialogComponent implements OnInit {
  form: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];

  get keywords() {
    return this.form.get('keywords');
  }

  constructor(public dialogRef: MatDialogRef<EditSectionTitleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SectionDialogData, private cdr: ChangeDetectorRef) {
    if (!this.form) {
      this.buildForm();
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.data && this.form && (this.data.isEdit || this.data.isReadonly)) {
      this.form.controls['name'].setValue(this.data.name);
      this.form.controls['status'].setValue(this.data.status);
      this.form.controls['categoryType'].setValue(this.data.categoryType);
      this.form.controls['description'].setValue(this.data.description);
      this.form.controls['keywords'].setValue(this.data.keywords);
      this.cdr.detectChanges();
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.keywords.setValue([...this.keywords.value, value.trim()]);
      this.keywords.updateValueAndValidity();
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(index: number): void {
    if (index >= 0) {
      /* We can use the statement this.keywords.value.splice(index, 1); to remove the item, but it removes the item 
      from the model this.data.keywords as well which leads to some bugs. */
      this.keywords.setValue(this.keywords.value.slice(0, index)
        .concat(this.keywords.value.slice(index + 1, this.keywords.value.length)));
      this.keywords.updateValueAndValidity();
    }
  }

  private buildForm() {
    const validations: ValidatorFn[] = [];
    if (!this.data.isFilter) {
      validations.push(Validators.required);
    }
    this.form = new FormGroup(
      {
        name: new FormControl('', validations),
        status: new FormControl('', validations),
        categoryType: new FormControl('', validations),
        description: new FormControl('', validations),
        keywords: new FormControl([], validations),
      }
    )
  }

}
