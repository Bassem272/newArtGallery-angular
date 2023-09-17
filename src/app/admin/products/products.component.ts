import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = []; // Initialize with an empty array for products
  searchQuery: string = '';
  searchResults: any[] = [];

  ngOnInit(): void {
    // Initialize products (You can fetch data from your backend API here)
    this.products = [
      { id: 1, name: 'Product 1', description: 'Description 1', editing: false },
      { id: 2, name: 'Product 2', description: 'Description 2', editing: false },
      { id: 3, name: 'Product 3', description: 'Description 3', editing: false }
    ];
  }

  addProduct(): void {
    const newProduct = { id: this.generateProductId(), name: '', description: '', editing: true };
    this.products.push(newProduct);
  }

  editProduct(product: any): void {
    product.editing = true;
  }

  deleteProduct(product: any): void {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  confirmEdit(product: any): void {
    product.editing = false;
    // Send PUT request to update the product data on the backend
  }

  cancelEdit(product: any): void {
    product.editing = false;
  }

  generateProductId(): number {
    // Replace this with logic to generate a unique product ID
    return Math.floor(Math.random() * 1000) + 1;
  }

  selectProduct(selectedProduct: any): void {
    // Implement the logic for selecting a product from search results
    // This could include setting the selected product as active or navigating to its details page
  }

  // Implement search functionality here and populate searchResults array
}

