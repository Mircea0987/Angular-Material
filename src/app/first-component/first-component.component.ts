import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  constructor(private _formBuilder: FormBuilder) {}

  showSpinner: boolean = false;

  panelOpenState: boolean = false;

  ngOnInit(): void {}
  hidden: boolean = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }
}
