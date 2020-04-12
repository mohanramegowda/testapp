import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { IProduct } from '@app/models/product';
import { MAT_DIALOG_DATA, MatDialogRef, MatChipInputEvent } from '@angular/material';
import { FormGroup, ValidatorFn, FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  public dialogRef: MatDialogRef<AddProductComponent>;
  @Inject(MAT_DIALOG_DATA) public data: IProduct;


  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];

  get keywords() {
    return this.form.get('keywords');
  }

  constructor(private cdr: ChangeDetectorRef) {
    if (!this.form) {
      this.buildForm();
    }
  }

  ngOnInit() {
  }

  private buildForm() {
    const validations: ValidatorFn[] = [];
    if (!this.data) {
      validations.push(Validators.required);
    }
    this.form = new FormGroup(
      {
        name: new FormControl('', validations),
        status: new FormControl('', validations),
        unit: new FormControl('', validations),
        unitPrice: new FormControl('', validations),
        color: new FormControl('', validations),
        modelName: new FormControl('', validations),
        brand: new FormControl('', validations),
        addedDate: new FormControl(null, validations),
        // image: new FormControl(null, validations),
        description: new FormControl('', validations),
        keywords: new FormControl([], validations),
      }
    )
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

  onNoClick(){
    // todo pending implementation
  }

}
