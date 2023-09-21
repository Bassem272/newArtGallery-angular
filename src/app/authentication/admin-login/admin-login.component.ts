import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication-service';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,private localStorageService:LocalStorageService,
    private authenticationService: AuthenticationService,
    private router:Router, private formBuilder : FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email:[ 'asso@Sana.com',[Validators.required,Validators.email]],
      password: ['Assooo12',[Validators.required,
        // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/)
      ]
      ]
    });
  }

  login() {
    this.authenticationService.login();
  }


  onSubmit() {
     console.log(this.loginForm.value, typeof this.loginForm.value);
    this.authService.adminLogin(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
       // After successful login or registration
this.localStorageService.set('token', res.token);
this.localStorageService.set('customer', JSON.stringify(res.customer));
        this.router.navigate(['/admin/customers']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
    // Method to check if there are any form control errors
    hasErrors(): any {
      return (
        this.loginForm.get('username')?.invalid ||
        this.loginForm.get('email')?.invalid ||
        this.loginForm.get('password')?.invalid
      );



      }
}
