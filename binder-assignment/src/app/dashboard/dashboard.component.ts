import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  searchTerm = "";
  constructor() { }

  ngOnInit() { }

  
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
