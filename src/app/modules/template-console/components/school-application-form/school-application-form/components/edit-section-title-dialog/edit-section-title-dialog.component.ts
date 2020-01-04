import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface SectionDialogData {
  title: string
}

@Component({
  selector: 'app-edit-section-title-dialog',
  templateUrl: './edit-section-title-dialog.component.html',
  styleUrls: ['./edit-section-title-dialog.component.scss']
})
export class EditSectionTitleDialogComponent implements OnInit {
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<EditSectionTitleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SectionDialogData, private cdr: ChangeDetectorRef) {
    if (!this.form) {
      this.form = new FormGroup(
        {
          title: new FormControl('', [Validators.required])
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

}
