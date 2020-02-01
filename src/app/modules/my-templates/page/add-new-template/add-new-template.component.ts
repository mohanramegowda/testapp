import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-new-template',
  templateUrl: './add-new-template.component.html',
  styleUrls: ['./add-new-template.component.scss']
})
export class AddNewTemplateComponent implements OnInit {
  templateDetailsForm: FormGroup;
  forseenApplicationForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    if (!this.templateDetailsForm) {
      this.templateDetailsForm = new FormGroup(
        {
          schoolName: new FormControl('', [Validators.required]),
          templateName: new FormControl('', [Validators.required]),
          description: new FormControl('', [Validators.required])
        }
      )
    }

    if(!this.forseenApplicationForm) {
      this.forseenApplicationForm = new FormGroup(
        {
          maximumNoOfApplications: new FormControl('')
        }
      )
    }
  }

  ngOnInit() {
  }

  onSaveTemplateDetails(){
    this.templateDetailsForm.markAllAsTouched();
  }

  onSaveForeseenApplications(){
    this.forseenApplicationForm.markAllAsTouched();
  }

}
