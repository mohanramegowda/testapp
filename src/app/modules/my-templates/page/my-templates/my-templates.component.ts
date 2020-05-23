import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { TemplateService } from '@app/services/template-service.service';

@Component({
  selector: 'app-my-templates',
  templateUrl: './my-templates.component.html',
  styleUrls: ['./my-templates.component.scss']
})
export class MyTemplatesComponent implements OnInit {

  templateList: any[];

  constructor(private router: Router, private templateService: TemplateService) { }

  ngOnInit() {
    this.templateService.getAllTemplates().subscribe(response => {
      this.templateList = response;
    })
  }

  OnEnterTemplate(templateId?: number) {
    if (templateId)
      this.router.navigate(['creation-console/enter-template', { template: templateId }]);
    else
      this.router.navigate(['creation-console/enter-template']);
  }

  OnManageProducts(templateId: number) {
    this.router.navigate(['creation-console/template-console', { template: templateId }]);
  }
}
