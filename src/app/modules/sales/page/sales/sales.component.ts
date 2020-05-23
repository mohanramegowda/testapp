import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SubmissionsComponent implements OnInit {

  submissionList = [{
    title: 'Swarga Rani',
    totalSubmission: 2
  },
  {
    title: 'NPS',
    totalSubmission: 10
  },
  {
    title: 'Baldvin',
    totalSubmission: 11
  },
  {
    title: 'Gnana Ganga Vidhya Peetha',
    totalSubmission: 100
  }];

  constructor() { }

  ngOnInit() {
  }

}
