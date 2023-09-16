import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm!:FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
    });
  }

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   // this.registerForm.reset();
  //   this.onSubmit();


  // }}

  onSubmit() {
    // if (this.registerForm && this.registerForm.valid) {
    //   // Your form submission logic here
    // }
    console.log(this.registerForm.value);
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
