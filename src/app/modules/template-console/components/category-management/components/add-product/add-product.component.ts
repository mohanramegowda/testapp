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
  imageFiles: File[] = [];
  isEdit: boolean = true;
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
      const productId = parseInt(this.route.snapshot.paramMap.get('product'));
      if (productId)
        this.productService.getProduct(productId).subscribe((response) => this.patchProduct(response));
    }
  }

  ngOnInit() {
  }

  private buildForm() {
    this.isEdit = this.route.snapshot.paramMap.get('isEdit') === 'false';
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
        // image1: new FormControl('', validations),
        description: new FormControl('', validations),
        keywords: new FormControl([]),
      }
    )
  }

  private patchProduct(response) {
    this.form.controls['name'].setValue(response.name);
    this.form.controls['status'].setValue(response.status);
    this.form.controls['unit'].setValue(response.unit);
    this.form.controls['unitPrice'].setValue(response.unitPrice);
    this.form.controls['color'].setValue(response.color);
    this.form.controls['modelName'].setValue(response.modelName);
    this.form.controls['brand'].setValue(response.brand);
    this.form.controls['addedDate'].setValue(response.addedDate);
    this.form.controls['description'].setValue(response.description);
    if (response.keywords) {
      response.keywords = response.keywords ?
        response.keywords.toString().split(',') : response.keywords;
    }
    this.form.controls['keywords'].setValue(response.keywords);
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
    const productId = parseInt(this.route.snapshot.paramMap.get('product'));
    const product = this.form.getRawValue();
    product.categoryId = parseInt(this.route.snapshot.paramMap.get('category'));
    // product.image1 = this.imageFile ? this.imageFile.toString() : '';
    const productFormData = this.getFormData(this.form.getRawValue());

    if (productId)
      this.productService.updateProduct(productFormData, productId)
        .subscribe(() => this.router.navigate(["../"], { relativeTo: this.route.parent }));
    else {
      this.productService.postProduct
        (productFormData)
        .subscribe(d => {
          this.router.navigate(["../"], { relativeTo: this.route.parent });
          console.log(d);
        });
    }
  }

  onFileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList && fileList.length > 0)
      this.imageFiles.push(<File>fileList[0]);
  }

  private getFormData(jsonObject: Object) {
    const formData = new FormData();

    for (var key in jsonObject) {
      formData.append(key, jsonObject[key]);
    }
    formData.append('categoryId', this.route.snapshot.paramMap.get('category'));
    if (this.imageFiles && this.imageFiles.length > 0) {
      for (let i = 0; i < this.imageFiles.length; i++) {
        formData.append(`file`, this.imageFiles[i]);
      }
    }
    return formData;
  }

  RemoveFile(i) {
    this.imageFiles.splice(i, 1);
  }
}
