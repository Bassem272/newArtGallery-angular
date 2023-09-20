import { Component, OnInit } from '@angular/core';
import { Artwork } from 'src/app/interfaces/artwork';
import { Customer } from 'src/app/interfaces/customer';
import { User } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  customer: Customer | undefined;
  // Define a user object

  // constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    // Fetch user data asynchronously using the user service
    // this.ApiService.getUserData().subscribe((userData: any) => {
    //   this.user = userData;
    // });
    this.getCustomer();
    // this.createProduct();

    this.searchByName(); //   // Your user data here
    setTimeout(() => {
      // this.user = {
      // };
    }, 2000); // Simulating a 2-second delay for data loading
  }
  constructor(private ApiService: ApiService) {}

  // getCustomerById(id){
  //   // return this.http.get(this.url+'/customers/'+id);
  // }

  // getCustomerByName(name){
  //   return this.http.get(this.url+'/customers/name/'+name);
  // }
id!:number;
  getCustomer() {

    const user = localStorage.getItem('user');


    this.ApiService.getCustomer(this.id).subscribe((data: Customer) => {
      this.customer = data;
      console.log(this.customers);
    });
  }
  // product: Artwork = {
  //   name: 'Product Name',
  //   price: 29.99,
  //   description: 'This is a sample product description.',
  //   category_id: 1,
  //   image: 'sample-image.jpg',
  //   stock: 100,
  //   // status: 'active',
  // };
  user: User = {
    name: 'assad Doe',
    email: 'assaddoe@example.com',
    password: 'assadasff',
    role: 'admin',
    phone: '123-456-7890',
    address: '123 Main Street',
  };

  customers!: Customer[];
  // users!:UserInterface[];
  name: string = 'Product Name';
  result: any;
  // createProduct() {
  //   this.ApiService.createProduct(this.product).subscribe((data: any) => {
  //     this.customers = data;
  //     console.log(this.customers);
  //   });
  // }
  createUser() {
    this.ApiService.createUser(this.user).subscribe((data: any) => {
      this.customers = data;
      console.log(data);
    });
  }

  createOrder() {
    this.ApiService.createOrder(this.user).subscribe((data: any) => {
      this.customers = data;
      console.log(data);
    });
  }
  searchByName() {
    this.ApiService.searchByName(this.name).subscribe((data: any) => {
      this.result = data;
      console.log('result', this.result);
    });
  }
}
