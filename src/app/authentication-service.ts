import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  private loggedIn = false; // Initialize as false when the user is not logged in

  // Implement a login method to set loggedIn to true
  login() {
    this.loggedIn = true;
  }

  // Implement a logout method to set loggedIn to false
  logout() {
    this.loggedIn = false;
  }

  // Method to check if the user is logged in
  isLoggedIn() {
    return this.loggedIn;
  }
}
