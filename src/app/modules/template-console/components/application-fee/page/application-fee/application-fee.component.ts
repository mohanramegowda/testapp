import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-application-fee',
  templateUrl: './application-fee.component.html',
  styleUrls: ['./application-fee.component.scss']
})
export class ApplicationFeeComponent implements OnInit {

  serviceFee: number;
  form: FormGroup;
  showPaypal: boolean;
  showPayoneer: boolean;

  payPalForm: FormGroup;

  constructor() {
    this.form = new FormGroup(
      {
        applicationFee: new FormControl('', [Validators.required])
      }
    )

    this.payPalForm = new FormGroup({
      emailAddress: new FormControl('', [Validators.required]),
      confirmEmailAddress: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.serviceFee = 100;
  }

  ConvertStringToFloat(value) {
    return parseFloat(value);
  }

  onheClick() {
    console.log(this.showPaypal);
  }

}
