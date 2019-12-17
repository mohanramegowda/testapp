import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  public slides = [
    { title: 'The biggest sale', subtitle: 'Special for today', },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', },
    { title: 'The biggest sale', subtitle: 'Special for today', },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', },
    { title: 'The biggest sale', subtitle: 'Special for today', }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onGetStartedClick() {
    this.router.navigate(['creation-console']);
  }

}
