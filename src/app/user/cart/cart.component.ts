import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
// import { faMinus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() stock = 1;
  @Input() price = 17.9;
  // cartItems: any[] = []; // Replace 'any' with your actual cart item data type
  // faMinus = faMinus;
  itemSubtotals: number[] = [];
 cartItems = [
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
    },
    // Add more cart items as needed
  ];

    constructor(private cdr: ChangeDetectorRef,private cartService: CartService) {}
    ngOnInit(): void {
      // Retrieve cart data from local storage and initialize the cart
      // const savedCart = localStorage.getItem('cart');
      // if (savedCart) {
      //   this.cartService.initializeCart(JSON.parse(savedCart));
      //   this.cartItems = JSON.parse(savedCart); // Assign the parsed cart data
      // }
        // this.calculateSubtotals();

      // Example in a component method
 this.getCartContents();

    }


getCartContents(): void {
  this.cartItems= this.cartService.getCart();

}


checkout(){
   console.log(this.cartItems);
}
  // increasestock() {
  //   this.stock++;
  //   this.cdr.detectChanges(); // Manually trigger change detection
  // }

  // decreasestock() {
  //   if (this.stock > 0) {
  //     this.stock--;
  //     this.cdr.detectChanges(); // Manually trigger change detection
  //   }
  // }
  increaseQuantity(item: any) {
    item.stock++;
    this.calculateSubtotals();
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  decreaseQuantity(item: any) {
    if (item.stock > 0) {
      item.stock--;
      this.calculateSubtotals();
      this.cdr.detectChanges(); // Manually trigger change detection
    }
  }
  // arr:any[]=[];
  // getTotalPrice1(item: any): number {
  //   return item.stock * this.price;
  // }

  getTotalPrice2(item: any): number {
    return item.stock * item.price;
  }
  // this form the array
  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.stock,
      0
    );
  }

  calculateSubtotals() {
    this.itemSubtotals = this.cartItems.map((item) =>
      this.getTotalPrice2(item)
    );
  }
  getTotalCost(): number {
    return this.itemSubtotals.reduce((total, subtotal) => total + subtotal, 0);
  }
}

