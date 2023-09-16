import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent implements OnInit{
  // ngOnInit() {
  //   myScript.myFunction();
  // }
// inject myScript in the component
  // constructor() {
  //   myScript.myFunction();
  // }
 isSidenavOpen = false;
  searchQuery: string = '';

  constructor(private router: Router) { }

  // ...

  navigateTo(section: string) {
    // Implement navigation logic based on the section
    switch (section) {
      case 'Dashboard':
        this.router.navigate(['/dashboard']);
        break;
      case 'Content':
        this.router.navigate(['/content']);
        break;
      case 'Analytics':
        this.router.navigate(['/analytics']);
        break;
      // Add more cases for other sections
      default:
        break;
    }
  }


  ngOnInit() {
    // Check local storage for dark mode and sidenav status here
  }

  // toggleSidenav() {
  //   this.isSidenavOpen = !this.isSidenavOpen;
  //   // Update local storage based on sidenav status here
  // }

  toggleDarkMode() {
    // Toggle dark mode logic here
  }

  // isSidenavOpen = true; // Initial state of the sidenav

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }


}
// dashboard.component.ts





