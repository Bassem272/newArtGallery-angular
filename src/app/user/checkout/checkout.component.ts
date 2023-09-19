import { ApiService } from 'src/app/services/api-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validator } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  checkoutForm: FormGroup;

constructor(private apiService : ApiService,private cartService:CartService,private formBuilder: FormBuilder,private router : Router) {

this.checkoutForm = this.formBuilder.group({

  firstName: ['',Validators.required],
  lastName: ['',Validators.required],
  email: ['',[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
  phone: ['',Validators.required,],
  address: ['',Validators.required],
  city: ['',],
  state: ['',],
  zip: [''],
  message:['']


})
  this.getCartContents();
this.orderItems.forEach(item => {
  this.updateSubtotal(item);
});
this.getTotalPrice();

}

// OnInit():void{



// }
getCartContents(): void {
  this.orderItems= this.cartService.getCart();
  console.log(this.orderItems)

}

getTotalPrice(): number {
  return this.orderItems.reduce(
    (total, item) => total + item.price * item.stock,
    0
  );
}
  orderItems = [
    {
      id: 1,
      name: 'Artwork 1',
      price: 100,
      stock: 2,
      image:'https://picsum.photos/id/100/200/300'
    },
    {
      id: 2,
      name: 'Artwork 2',
      price: 75,
      stock: 1,
      image:'https://picsum.photos/id/103/200/300'
    },
    {
      id: 3,
      name: 'Artwork 3',
      price: 75,
      stock: 1,
      image:'https://picsum.photos/id/101/200/300'
    },{
      id: 1,
      name: 'Artwork 1',
      price: 100,
      stock: 2,
      image:'https://picsum.photos/id/100/200/300'
    },
    // Add more order items here
  ];







  updateSubtotal(item: any): void {
    item.subtotal = Math.round(item.price * item.stock);
    this.calculateTotal();
  }

  incrementQuantity(item: any,event:Event): void {
    event.preventDefault();
    item.stock += 1;
    this.updateSubtotal(item);
  }

  decrementQuantity(item: any , e :Event): void {
    e.preventDefault();
    if (item.stock > 1) {
      item.stock -= 1;
      this.updateSubtotal(item);
    }
  }

  deleteOrderItem(index: number): void {
    if (index >= 0 && index < this.orderItems.length) {
      this.orderItems.splice(index, 1);
    }
  }

  calculateTotal(): number {
    //  console.log(this.orderItems);
    return Math.round(this.orderItems.reduce((total:number, item:any) => total + item.subtotal, 0));


  }
  // getTotalPrice(): number {
  //   return this.orderItems.reduce(
  //     (total, item) => total + item.price * item.stock,
  //     0
  //   );
  // }

  onSubmit(): void {
    console.log('Submit');
    console.log(this.orderItems);
    console.log(this.checkoutForm.value)

    const order = {
      "order_status":"pending",
      "customer_name": this.checkoutForm.value.firstName+this.checkoutForm.value.lastName,
      "customer_phone": this.checkoutForm.value.phone,
      "customer_email": this.checkoutForm.value.email,
      "customer_address": this.checkoutForm.value.address,
      "total": this.getTotalPrice(),
      "order_items": this.orderItems.map((product) => {
        return {
          "product_name": product.name,
          "product_quantity": product.stock,
          "product_price": product.price,
          "product_subtotal": product.stock * product.price,
        };
      }),

    };
 console.log(order)

 this.apiService.createOrder(order).subscribe(data => {
    const createdorder  = data.order;
      console.log(createdorder);
      // this.router.navigate(['/checkout']);
    });
    // this.router.navigate(['/checkout'],);
  }}

