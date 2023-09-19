import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { parse } from '@fortawesome/fontawesome-svg-core';
import { Order } from 'src/app/interfaces/order';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent{
  // orders: any[] = []; // Initialize with an empty array for orders
  searchQuery: string | undefined;
  searchResults: any[] = [];
  constructor(private _apiService: ApiService
    , private _snackBar: MatSnackBar) {
    this.loadOrders();
  }

  openSnackBar(message: string, action: string) {
this._snackBar.open(message, action);
  }
  orders: any = [
    // {
    //   id: 1,
    //   customer_name: 'Customer 1',
    //   customer_phone: 'Customer 1',
    //   customer_email: 'Customer 1',
    //   customer_address: 'Customer 1',
    //   order_number: 'Customer 1',
    //   order_date: 'Customer 1',
    //   order_status: 'Customer 1',
    //   order_items: [
    //  {   price: 100,
    //     discount: 10,
    //     quantity: 1,
    //     product_name: 'Customer 1',}],
    //     total: 100,
    //   }
  ];

  // ngOnInit(): void {
  //   // Initialize orders (You can fetch data from your backend API here)

  //   this.loadOrders();
  // }
  loadOrders() {
    // Replace with your actual code to fetch orders
    // Example:
    this._apiService.getOrders().subscribe((data: any) => {
      console.log(data);

      // Assuming that 'order_items' is an array in the response
      // You should parse each item in the 'order_items' array
      this.orders = data;
      // this.openSnackBar('orders are fetched successfully','ok')
      // console.log('orderss', this.orders[0]);
      // this.orders.forEach((element: { order_items: string; }) => {
      //   console.log(element[0]);
      //   element.order_items = JSON.parse(element.order_items);

      // });

      // If 'order_items' is an array of JSON strings, parse them into objects
      //   if (this.orders && this.orders.order_items && Array.isArray(this.orders.order_items)) {
      //     this.orders.order_items = this.orders.order_items.map((item) => JSON.parse(item));
      //   }
      // });
    });
  }
  // addOrder(): void {
  //   const newOrder = {
  //     id: this.generateOrderId(),
  //     customerName: '',
  //     product: '',
  //     quantity: 0,
  //     editing: true,
  //   };
  //   this.orders.push(newOrder);
  // }

  editing: boolean = false;

  editOrder(item: any): void {
    this.editing = true;
    const id = item.id;

    console.log(id)

    this._apiService.changeStatus(id).subscribe((data: any) => {
      console.log(data);
      this.loadOrders();
      this.openSnackBar('order for the customer: '+item.customer_name + 'and the number of the order is :' +item.order_number+ 'is complete now !!','ok')

      })
  }

  // deleteOrder(order: any): void {
  //   const index = this.orders.indexOf(order);
  //   if (index !== -1) {
  //     this.orders.splice(index, 1);
  //   }
  // }

  confirmEdit(order: any): void {
    console.log(order);
    this._apiService.updateOrder(order.id, order).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.editing = false;
  } // Send PUT request to update the order data on the backend

  cancelEdit(order: any): void {
    this.editing = false;
  }

  generateOrderId(): number {
    // Replace this with logic to generate a unique order ID
    return Math.floor(Math.random() * 1000) + 1;
  }

  selectOrder(selectedOrder: any): void {
    // Implement the logic for selecting an order from search results
    // This could include setting the selected order as active or navigating to its details page
  }

  // Other properties and constructor here...

  // Initialize orders here, e.g., by fetching data from a service
}

// searchOrders() {
//   // Check if this.orders is defined
//   if (this.order && this.searchQuery) {
//     // Filter orders based on the searchQuery
//     this.searchResults = this.orders.filter((order: Order) =>
//       order.customer_name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
//       order.order_items.some((item) =>
//         item.product_name.toLowerCase().includes(this.searchQuery.toLowerCase())
//       )
//     );
//   } else {
//     // Clear searchResults if the searchQuery is empty or this.orders is undefined
//     this.searchResults = [];
//   }
// }

function searchOrders() {
  throw new Error('Function not implemented.');
}
// Implement other functions like addOrder, editOrder, deleteOrder, etc.

// Implement search functionality here and populate searchResults array

// {
//   "id": 3,
//   "order_number": "74362",
//   "order_date": "1993-02-20 14:40:54",
//   "order_status": "pending",
//   "created_at": "2000-03-25T12:27:32.000000Z",
//   "updated_at": "2007-08-23T07:05:57.000000Z",
//   "customer_name": "Adalberto Walter",
//   "customer_phone": "(432) 419-4234",
//   "customer_email": "alysa.weissnat@example.com",
//   "customer_address": "8231 Gertrude Circle Suite 436\nWest Shayna, HI 20785-1481",
//   "total": 88223,
//   "order_items": "{\"price\": 551, \"discount\": 8.24, \"quantity\": 9, \"product_name\": \"Miss Esther Fahey V\"}"
// }
