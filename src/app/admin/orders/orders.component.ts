import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any[] = []; // Initialize with an empty array for orders
  searchQuery: string = '';
  searchResults: any[] = [];
  orderService: any;

  ngOnInit(): void {
    // Initialize orders (You can fetch data from your backend API here)
    this.orders = [
      { id: 1, customerName: 'Customer 1', product: 'Product 1', quantity: 5, editing: false },
      { id: 2, customerName: 'Customer 2', product: 'Product 2', quantity: 3, editing: false },
      { id: 3, customerName: 'Customer 3', product: 'Product 3', quantity: 2, editing: false }
    ]; this.loadOrders();
  }

  addOrder(): void {
    const newOrder = { id: this.generateOrderId(), customerName: '', product: '', quantity: 0, editing: true };
    this.orders.push(newOrder);
  }

  editOrder(order: any): void {
    order.editing = true;
  }

  deleteOrder(order: any): void {
    const index = this.orders.indexOf(order);
    if (index !== -1) {
      this.orders.splice(index, 1);
    }
  }

  confirmEdit(order: any): void {
    order.editing = false;
    // Send PUT request to update the order data on the backend
  }

  cancelEdit(order: any): void {
    order.editing = false;
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



  loadOrders() {
    // Replace with your actual code to fetch orders
    // Example:
    this.orderService.getOrders().subscribe((data: any) => {
      this.orders = data;
    });
  }

  // Implement the searchOrders function
  searchOrders() {
    // Replace this with your actual search logic
    if (this.searchQuery) {
      // Filter orders based on the searchQuery
      this.searchResults = this.orders.filter(order =>
        order.customerName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        order.product.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      // Clear searchResults if the searchQuery is empty
      this.searchResults = [];
    }
  }

  // Implement other functions like addOrder, editOrder, deleteOrder, etc.

  // Implement search functionality here and populate searchResults array
}


