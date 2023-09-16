import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validator } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  checkoutForm: FormGroup;

constructor(private formBuilder: FormBuilder) {

this.checkoutForm = this.formBuilder.group({

  firstName: ['',Validators.required],
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  country: '',

})

this.orderItems.forEach(item => {
  this.updateSubtotal(item);
});

}


  orderItems = [
    {
      productName: 'Product 1',
      price: 10.99,
      quantity: 86,
      subtotal: 0
    },  {
      productName: 'Product 2',
      price: 10.99,
      quantity: 2,
      subtotal: 0
    },  {
      productName: 'Product 3',
      price:50,
      quantity: 6,
      subtotal: 0
    },
    // Add more order items here
  ];







  updateSubtotal(item: any): void {
    item.subtotal = Math.round(item.price * item.quantity);
    this.calculateTotal();
  }

  incrementQuantity(item: any): void {
    item.quantity += 1;
    this.updateSubtotal(item);
  }

  decrementQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.updateSubtotal(item);
    }
  }

  deleteOrderItem(index: number): void {
    if (index >= 0 && index < this.orderItems.length) {
      this.orderItems.splice(index, 1);
    }
  }

  calculateTotal(): number {
     console.log(this.orderItems);
    return Math.round(this.orderItems.reduce((total:number, item:any) => total + item.subtotal, 0));


  }

  onSubmit(): void {
    console.log('Submit');
    console.log(this.orderItems);
  }

}
