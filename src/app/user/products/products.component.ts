import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Artwork } from 'src/app/interfaces/artwork';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

// import { CartService } from '../cart.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CartService } from 'src/app/services/cart.service';
import { ApiService } from 'src/app/services/api-service';
interface Product {
  name: string;
  description: string;
  price: number;
  artist: string;
  type: string;
  date: Date;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('elevate', [
      state('normal', style({ transform: 'none', boxShadow: 'none' })),
      state(
        'elevated',
        style({
          transform: 'translateY(-5px)',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
        })
      ),
      transition('normal <=> elevated', animate('200ms ease-in-out')),
    ]),
  ],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  elevation: number = 0;
  [x: string]: any;
  productId: number | null = null;

  //   displayedColumns: string[] = ['name', 'description', 'price', 'artist', 'type', 'date'];
  // dataSource: MatTableDataSource<Product> = new MatTableDataSource();
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort)
  // sort!: MatSort;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private apiService: ApiService
  ) {}
  // faCartPlus=faCartPlus;

  // Function to view artwork details
  // viewArtworkDetails(artworkId: number) {
  //   // Navigate to the artwork details page with the artwork ID
  //   this.router.navigate(['/user/details', artworkId]);
  // }

  viewArtworkDetails(artworkId: number): void {
    // Implement your artwork details view logic here
    console.log(`Viewing details for artwork with ID ${artworkId}.`);
    this.router.navigate(['/user/details', artworkId]);
  }

  products: Product[] = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 100,
      artist: 'Artist 1',
      type: 'Type A',
      date: new Date('2023-01-15'),
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 150,
      artist: 'Artist 2',
      type: 'Type B',
      date: new Date('2023-02-20'),
    },
    {
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 80,
      artist: 'Artist 3',
      type: 'Type A',
      date: new Date('2023-03-25'),
    },
    // Add more products as needed
  ];

  // onCardMouseEnter(product: Product) {
  //   product.isHovered = true;
  // }

  // onCardMouseLeave(product: Product) {
  //   product.isHovered = false;
  // }
  // Access the route parameter (id)
  ngOnInit(): void {
    this.loadProducts();
    this.dataSource.paginator = this.paginator;
    // this.updateDataSource();
    // Use the paramMap observable to handle changes in route parameters
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   // Check if the 'id' parameter exists before accessing it
    //   if (params.has('id')) {
    //     this.productId = params.get('id');
    //     // Now you can safely use this.productId
    //   } else {
    //     // Handle the case where 'id' parameter is not present
    //     this.productId = null;
    //   }
    // });
    this.dataSource.paginator = this.paginator;
  }
  hoveredArtwork: any | null = null; // Initialize hoveredArtwork as null

  // Load products from the API
  loadProducts(): void {
    this.apiService.getProducts().subscribe(
      (data: Artwork[]) => {
        this.dataSource.data = data;
        this.featuredArtworks = data;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }
  // Load product details based on productId
  loadProductDetails(productId: number): void {
    this.apiService.getProduct(productId).subscribe(
      (product: Artwork) => {
        // Use the product data to render the details
        console.log('Product Details:', product);
      },
      (error) => {
        console.error('Error loading product details:', error);
      }
    );
  }
  // Function to handle mouseenter event
  onArtworkMouseEnter(artwork: any) {
    this.hoveredArtwork = artwork;
  }

  // Function to handle mouseleave event
  onArtworkMouseLeave() {
    this.hoveredArtwork = null;
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log(product);
  }

  featuredArtworks: Artwork[] = [
    {
      id: 1,
      // "artist":"artist reality",
      name: 'betterHalfReality',
      description:
        'The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.',
      image: '../../../assets/betterHalfReality.png',
      price: 100,
      category_id: 2,
      stock: 10,

      // ,"elevation":0
    },
    {
      id: 1,
      name: 'paradiseVacation',
      description:
        'The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.',
      image: '../../../assets/paradiseVacation.png',
      price: 100,
      category_id: 2,
      stock: 10,
    },
    {
      id: 2,
      name: 'enormousTree',
      description:
        'The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.',
      image: '../../../assets/enormousTree.png',
      price: 100,
      category_id: 2,
      stock: 10,
    },
    {
      id: 3,
      name: 'betterHalfReality',
      description:
        'The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.',
      image: '../../../assets/betterHalfReality.png',
      price: 100,
      category_id: 4,
      stock: 10,
    },
    {
      id: 4,
      name: 'werwte paradiseVacation',

      description:
        'The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.',
      image: '../../../assets/paradiseVacation.png',
      price: 100,
      category_id: 2,
      stock: 10,
    },
    {
      id: 5,
      name: 'wreew enormousTree',

      description:
        'The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.',
      image: '../../../assets/enormousTree.png',
      price: 100,
      category_id: 2,
      stock: 10,
    },
  ];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  // dataSource = new MatTableDataSource(this.featuredArtworks);
  dataSource = new MatTableDataSource<Artwork>(this.featuredArtworks);
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.

    // this.dataSource.paginator = this.paginator;
    // this.updateDataSource();
    setTimeout(() => {
      this.updateDataSource();
      console.log('we are here', this.featuredArtworks.length);
    }, 0);
  }

  pageSizeOptions: number[] = [3, 6, 9, 12];
  pageSize = 3;
  pageIndex = 0;

  onPageChange(event: PageEvent) {
    // this.paginator.pageIndex = event.pageIndex; // Update the paginator's pageIndex
    this.updateDataSource();
    // this.updateDataSource();
    // this.dataSource.paginator = this.paginator;
    console.log('onpagechange');
    console.log(event.pageIndex);
    console.log(event);
  }

  updateDataSource() {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      const endIndex = startIndex + this.paginator.pageSize;

      // Get data for the current page
      const dataForCurrentPage = this.featuredArtworks.slice(
        startIndex,
        endIndex
      );

      // Update the data source
      this.dataSource.data = dataForCurrentPage;
      console.log('dataForCurrentPage', dataForCurrentPage);
      console.log('this.dataSource.data', this.dataSource.data);
      // this.dataSource = new MatTableDataSource(dataForCurrentPage);
    }
  }
  // getCustomers(){
  //   return this.http.get(this.url+'/customers');
  // }

  // getCustomerById(id){
  //   return this.http.get(this.url+'/customers/'+id);
  // }

  // getCustomerByName(name){
  //   return this.http.get(this.url+'/customers/name/'+name);
  // }
}
