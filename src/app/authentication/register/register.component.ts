import { LocalStorageService } from './../../services/localStorage.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
        ],
      ],
    });
  }






  onSubmit() {
    // if (this.registerForm && this.registerForm.valid) {
    //   // Your form submission logic here
    // }
    console.log(this.registerForm.value, typeof this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe(
      (res: any) => {
        console.log(res);
        // this.router.navigate(['/login']);
        // this.localStorageService.set('customer', res.customer);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  // Method to check if there are any form control errors
  hasErrors(): any {
    return (
      this.registerForm.get('username')?.invalid ||
      this.registerForm.get('email')?.invalid ||
      this.registerForm.get('password')?.invalid
    );
  }
}
