import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: AuthenticationService) {}

  // Method to check if the user is logged in
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
