import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private authService: AuthenticationService) {}
  
  logout() {
    this.authService.logout();
  }
}
