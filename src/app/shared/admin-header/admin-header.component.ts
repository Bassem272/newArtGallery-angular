import { Component } from '@angular/core';

import { AuthenticationService } from 'src/app/authentication-service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  search()
  {}
  searchQuery:any | undefined;

    constructor(private authService: AuthenticationService) {}

    // Method to check if the user is logged in
    isLoggedIn() {
      return this.authService.isLoggedIn();
    }

  }

