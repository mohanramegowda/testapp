import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateService } from '@app/services/template-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  templateList: any[];
  public slides = [
    { title: 'The biggest sale', subtitle: 'Special for today', },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', },
    { title: 'The biggest sale', subtitle: 'Special for today', },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', },
    { title: 'The biggest sale', subtitle: 'Special for today', }
  ];
  constructor(private router: Router, private templateService: TemplateService) { }

  ngOnInit() {
    this.templateService.getAllTemplates().subscribe(response => {
      this.templateList = response;
    })
  }

  onGetStartedClick() {
    this.router.navigate(['get-started']);
  }

  viewDemo(template) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/${template.id}/${template.name}`])
    );
    window.open(url, '_blank');
  }
}
