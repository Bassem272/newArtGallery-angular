import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service';
import { Component } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { CartService } from 'src/app/services/cart.service';
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // Define animations here
    trigger('overlayAnimation', [
      state('initial', style({ transform: 'translateY(100%)', opacity: 0 })),
      state('final', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('initial => final', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class HomeComponent {


  constructor(private apiService: ApiService,private cartService: CartService,private router:Router) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    console.log(product);
    const carts= this.cartService.getCart()
    console.log(carts);
  }

  removeFromCart(product: any): void {
    this.cartService.removeFromCartById(product.id);

  }

   ngOnInit(): void {
    // Make the API request to fetch featured artworks here
    this.fetchFeaturedArtworks();
  }

  fetchFeaturedArtworks() {
    // Call your ApiService method to fetch the artworks data
    this.apiService.getProducts().subscribe(
      (response: any) => {
        // Assuming the response contains an array of featured artworks
        this.featuredArtworks = response;
      },
      (error) => {
        console.error('Error fetching featured artworks:', error);
      }
    );
  }
  // Featured Artworks
  featuredArtworks = [
    {
      title: 'Artwork 1',
      artist: 'Artist 1',
      image: '../../../assets/autherRational.png',
      id: 1,
    },
    {
      title: 'Artwork 2',
      artist: 'Artist 2',
      image: '../../../assets/autherRational.png',
      id: 2,
    },
    {
      title: 'Artwork 1',
      artist: 'Artist 1',
      image: '../../../assets/autherRational.png',
      id: 1,
    },
    {
      title: 'Artwork 2',
      artist: 'Artist 2',
      image: '../../../assets/autherRational.png',
      id: 2,
    },
    // Add more artworks
  ];

  // Upcoming Exhibitions
  upcomingExhibitions = [
    {
      name: 'Exhibition 1',
      description: 'Description 1',
    },
    {
      name: 'Exhibition 2',
      description: 'Description 2',
    },
    // Add more exhibitions
  ];

  // Featured Artists
  featuredArtists = [
    {
      name: 'Artist 1',
      image: '../../../assets/authorWrath.png',
    },
    {
      name: 'Artist 2',
      image: '../../../assets/storm.png',
    },
    // Add more artists
  ];

  // Testimonials
  testimonials = [
    {
      text: 'Testimonial 1 text.',
      author: 'Author 1',
    },
    {
      text: 'Testimonial 2 text.',
      author: 'Author 2',
    },
  ];

  // Function to handle adding artworks to the cart
  // addToCart(artworkId: any): void {
  //   // Implement your cart logic here
  //   console.log(`Added artwork with ID ${artworkId} to the cart.`);
  // }

  // Function to view artwork details
  viewArtworkDetails(artworkId: number): void {
    // Implement your artwork details view logic here
    console.log(`Viewing details for artwork with ID ${artworkId}.`);
    this.router.navigate(['/user/details', artworkId]);
  }
  showOverlay: boolean = false;
}
