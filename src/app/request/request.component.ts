import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {

  years: number[];
  selectedYear: number;
  
  constructor(private router: Router) {}

  ngOnInit(): void{

    const currentYear = new Date().getFullYear();
    this.years = [currentYear - 2, currentYear - 1, currentYear];
    this.selectedYear = currentYear;

  }

  goToSupportHours() {
    this.router.navigate(["supporthours", this.selectedYear]).catch(error => {
      console.error("Error navigating to support hours:", error);
    });
  }
  
  goToUsages() {
    this.router.navigate(["usages", this.selectedYear]).catch(error => {
      console.error("Error navigating to usages:", error);
    });
  }
  
}
