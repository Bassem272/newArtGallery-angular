import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork } from 'src/app/interfaces/artwork';
import { ApiService } from 'src/app/services/api-service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent  {
  // product!: Artwork; // Replace 'any' with your actual product data type


    productId: number;


    constructor(private route: ActivatedRoute, private apiService: ApiService
      ,private cartService : CartService) {
      this.productId = this.route.snapshot.params['id'];
      console.log(this.productId);

      this.apiService.getProduct(this.productId).subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          console.error('Error fetching product details:', error);
        }
      );

    }

    // ngOnInit(): void {
    //   this.apiService.getProduct(this.productId).subscribe(
    //     (data) => {
    //       this.product = data;
    //     },
    //     (error) => {
    //       console.error('Error fetching product details:', error);
    //     }
    //   );

    // }
  addToCart(product: any) {
    console.log(product);
        this.cartService.addToCart(product);
      }

   product = {
      id: 1,
      name: 'Artwork Name',
      description: 'Description',
      price: 100,
      stock: 10,
      category_id:1,
      image: 'image-url.jpg'
    };


}

