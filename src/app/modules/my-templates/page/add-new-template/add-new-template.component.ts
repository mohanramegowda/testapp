import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TemplateService } from '@app/services/template-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-new-template',
  templateUrl: './add-new-template.component.html',
  styleUrls: ['./add-new-template.component.scss']
})
export class AddNewTemplateComponent implements OnInit {
  templateDetailsForm: FormGroup;
  templateId: number;

  constructor(private templateService: TemplateService, private route: ActivatedRoute,
    private router: Router) {
    if (!this.templateDetailsForm) {
      this.templateDetailsForm = new FormGroup(
        {
          name: new FormControl('', [Validators.required]),
          description: new FormControl('', [Validators.required])
        }
      )
    }
  }

  ngOnInit() {
    this.templateId = parseInt(this.route.snapshot.paramMap.get('template'));
    if (this.templateId) {
      this.templateService.getAllTemplatesById(this.templateId).subscribe((response: any) => {
        this.templateDetailsForm.controls['name'].setValue(response.name);
        this.templateDetailsForm.controls['description'].setValue(response.description);
      })
    }
  }

  onSaveTemplateDetails() {
    if (this.templateId)
      this.templateService.updateTemplate(this.templateDetailsForm.getRawValue(), this.templateId)
        .subscribe(() =>
          this.router.navigate(["../my-templates"], { relativeTo: this.route.parent }));
    else
      this.templateService.postTemplate(this.templateDetailsForm.getRawValue())
        .subscribe(() =>
          this.router.navigate(["../my-templates"], { relativeTo: this.route.parent }));
  }

}
