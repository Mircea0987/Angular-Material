import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-material';

  showSpinner: boolean = false;

  ngOnInit() {}
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
