import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication-service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthenticationService, private formBuilder : FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username:[ '',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)]]
    });
  }

  login() {
    this.authService.login();
  }

  onSubmit() {
    // if (this.registerForm && this.registerForm.valid) {
    //   // Your form submission logic here
    // }
    console.log(this.loginForm.value);
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
