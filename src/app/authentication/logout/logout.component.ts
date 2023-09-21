import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication-service';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private authService: AuthService,private authenticationService: AuthenticationService,private localStorageService: LocalStorageService) {}

  logout() {
    let _token = this.localStorageService.get('token');
    console.log('before logout',_token);
    this.authService.logout().subscribe((data:any) =>{
      console.log(data);
      this.localStorageService.remove('token');
      this.localStorageService.remove('user');
      let _token = this.localStorageService.get('token');
      console.log('after logout',_token);
      let _user = this.localStorageService.get('user');
      console.log('after logout',_user);
      // this.router.navigate(['/auth/login']);
      // this.localStorageService.remove('user');
      this.authenticationService.logout();
    },(error)=>{

      console.log(error);
    }

    )
  }
}
