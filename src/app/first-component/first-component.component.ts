import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  constructor() {}

  showSpinner: boolean = false;

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
