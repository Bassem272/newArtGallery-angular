import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from './../../interfaces/customer';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  searchResults: string[] = [];
  customers: any[] = [{ name: 'bassem', email: 'basem@gmail.com' }]; // Initialize with your customer data
  users: any[] = [];

  addUserForm: FormGroup;
  editUserForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private _apiService: ApiService) {
    this.addUserForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
    this.editUserForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {

    this._apiService.getCustomers().subscribe((data: any) => {
      console.log(data['all Customers'] );
      this.customers = data['all Customers'];
    },(error)=>{
      console.log(error);
    });
  }

  searchUsers(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      const query = target.value;
      // Implement your user search logic here
      // For example, you can make an HTTP request to fetch search results
      // Replace the following mock data with actual search results from your API
      this.searchResults = ['User 1', 'User 2', 'User 3'];
    }
  }
  addCustomer() {
    const Customer = {
      name: '',
      email: '',
    };
    this.users.push(Customer);
  }

  deleteCustomer(customer: any) {
    // Implement the logic to delete a customer
  }

  editCustomer(customer: any) {
    // Enable editing for the selected customer
    customer.editing = true;
  }

  confirmEditCustomer(customer: any) {
    // Implement the logic to confirm and save edited customer data
    customer.editing = false;
  }

  cancelEditCustomer(customer: any) {
    // Cancel the editing of the customer
    customer.editing = false;
  }

  // addUser() {
  //   const User= {
  //     name: '',
  //     email: '',
  //     editing: false,
  //   }
  //   this.users.push(User);
  // }

  deleteUser(user: any) {
    // Implement the logic to delete a user
  }

  editUser(user: any) {
    // Enable editing for the selected user
    user.editing = true;
  }

  confirmEditUser(user: any) {
    // Implement the logic to confirm and save edited user data
    user.editing = false;
    console.log(this.addUserForm.value);
  }

  cancelEditUser(user: any) {
    // Cancel the editing of the user
    user.editing = false;
  }

  //===============================
  //===============================
  //===============================
  //===============================
  showAddUserForm: boolean = false;
  newUser: any = {
    name: '',
    email: '',
  };

  // ... (existing code) ...

  addUser() {
    this.showAddUserForm = true;
  }

  confirmAddUser() {
    // Implement logic to add the new user to the 'users' array
    this.users.push(this.newUser);

    // Reset the form and hide it
    this.newUser = { name: '', email: '' };
    this.showAddUserForm = false;
    console.log(this.addUserForm.value);
  }

  cancelAddUser() {
    // Reset the form and hide it
    this.newUser = { name: '', email: '' };
    this.showAddUserForm = false;
  }
}
