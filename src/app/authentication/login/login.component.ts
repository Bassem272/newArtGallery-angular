import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication-service';
import { ApiService } from 'src/app/services/api-service';
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

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

   const user = this.localStorageService.get('user')
    this.loginForm = this.formBuilder.group({
    email: [`${user.email}`, [Validators.required, Validators.email]],
      password: [
        'Asdf1234',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/),
        ],
      ],
    });
    this.getTokenandUserid();
  }

  getTokenandUserid() {
    const token = this.localStorageService.get('token');
    console.log(token);
    const user = this.localStorageService.get('user');
    const user_id = user.id;
    this.apiService.getUser(user_id).subscribe((data: any) => {
      console.log(data);
      const user = data;
      this.localStorageService.set('user', user);
      console.log(this.localStorageService.get('user'));
      const role = data.role;
      console.log(role, data.id);
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

        console.log(this.localStorageService.get('token'));
        if(res      ){

          this.router.navigate(['/user/home']);

        }
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
