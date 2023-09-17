import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any; // Replace 'any' with your actual product data type

  constructor() { }

  ngOnInit() {
    // Initialize 'product' with sample product data
    this.product = {
      id: 1,
      name: 'Artwork Name',
      description: 'Description',
      price: 100,
      artist: 'Artist Name',
      image: 'image-url.jpg'
    };
  }
}
