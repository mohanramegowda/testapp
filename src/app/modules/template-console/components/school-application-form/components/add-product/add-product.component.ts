import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { IProduct } from '@app/models/product';
import { MAT_DIALOG_DATA, MatDialogRef, MatChipInputEvent } from '@angular/material';
import { FormGroup, ValidatorFn, FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { ProductService } from '@app/services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  imageFile: string | ArrayBuffer;
  public dialogRef: MatDialogRef<AddProductComponent>;
  @Inject(MAT_DIALOG_DATA) public data: IProduct;


  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];

  get keywords() {
    return this.form.get('keywords');
  }

  constructor(private cdr: ChangeDetectorRef, private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
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
        color: new FormControl(''),
        modelName: new FormControl(''),
        brand: new FormControl(''),
        addedDate: new FormControl(null),
        image: new FormControl('', validations),
        description: new FormControl('', validations),
        keywords: new FormControl([]),
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

  onNoClick() {
    // todo pending implementation
  }

  onSubmit() {
    const product = this.form.getRawValue();
    product.categoryId = parseInt(this.route.snapshot.paramMap.get('category'));
    product.image = this.imageFile ? this.imageFile.toString() : '';
    this.productService.postProduct
      (product)
      .subscribe(d => {
        this.router.navigate(["../"], {relativeTo: this.route.parent});
        console.log(d);
      });
  }

  onFileChange(event) {
    let fileList: FileList = event.target.files;    
    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.imageFile = myReader.result;
    }
    myReader.readAsDataURL(<File>fileList[0]);
  }

}
