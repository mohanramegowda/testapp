import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';

export interface SectionDialogData {
  title: string
}

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
      this.form = new FormGroup(
        {
          title: new FormControl('', [Validators.required]),
          status: new FormControl('', [Validators.required]),
          description: new FormControl('', [Validators.required]),
          keywords: new FormControl([], [Validators.required]),
        }
      )
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.data && this.form) {
      this.form.controls['title'].setValue(this.data.title);
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

  remove(fruit: Fruit): void {
    const index = this.keywords.value.indexOf(fruit);

    if (index >= 0) {
      this.keywords.value.splice(index, 1);
      this.keywords.updateValueAndValidity();
    }
  }

}
