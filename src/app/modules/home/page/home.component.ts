import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public slides = [
    { title: 'The biggest sale', subtitle: 'Special for today',  },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', },
    { title: 'The biggest sale', subtitle: 'Special for today',  },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', },
    { title: 'The biggest sale', subtitle: 'Special for today',  }
  ];
  constructor(private router: Router, ) { }

  ngOnInit() {
  }

  onGetStartedClick(){
    this.router.navigate(['get-started']);
  }

}
