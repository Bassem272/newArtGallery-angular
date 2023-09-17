import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication-service';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  [x: string]: any;


  loginForm: FormGroup;

  constructor(private authService: AuthService,private localStorageService:LocalStorageService,
    private authenticationService: AuthenticationService,
    private router:Router, private formBuilder : FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username:[ '',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)]]
    });
  }

  login() {
    this.authenticationService.login();
  }

  onSubmit() {
    // if (this.registerForm && this.registerForm.valid) {
    //   // Your form submission logic here
    // }
    console.log(this.loginForm.value, typeof this.loginForm.value);
    this.authService.logIn(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
       // After successful login or registration
this.localStorageService.set('token', res.token);
this.localStorageService.set('customer', JSON.stringify(res.customer));
        this.router.navigate(['/user/home']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  // onSubmit() {
  //   // if (this.registerForm && this.registerForm.valid) {
  //   //   // Your form submission logic here
  //   // }
  //   console.log(this.loginForm.value);
  // }
    // Method to check if there are any form control errors
    hasErrors(): any {
      return (
        this.loginForm.get('username')?.invalid ||
        this.loginForm.get('email')?.invalid ||
        this.loginForm.get('password')?.invalid
      );



      }
}
