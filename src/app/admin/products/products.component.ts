import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Artwork } from 'src/app/interfaces/artwork';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = []; // Initialize with an empty array for products
  searchQuery: string = '';
  searchResults: any[] = [];
  editingProduct: any;
  adding:boolean=false;
  constructor(private apiService: ApiService,
    private _snackBar:MatSnackBar) {
    this.loadProducts();
  }
  openSnackBar(message: string, action: string) {
this._snackBar.open(message, action);
  }

  // ngOnInit(): void {
  //   // Initialize products (You can fetch data from your backend API here)
  //   this.products = [
  //     { id: 1, name: 'Product 1', description: 'Description 1', editing: false },
  //     { id: 2, name: 'Product 2', description: 'Description 2', editing: false },
  //     { id: 3, name: 'Product 3', description: 'Description 3', editing: false }
  //   ];
  // }

  addProduct(): void {
    this.adding=true;
    const newProduct = {
      id: this.featuredArtworks.length + 1,
      name: 'product name',
      description: '',
      stock: 1,
      price: 1,
      image: 'http://placehold.it/120x120&text=image4',
      status:'active'
    };
    this.featuredArtworks.unshift(newProduct);
    this.editingProduct = newProduct;
    //     this.apiService.createProduct(newProduct).subscribe((data:any)=>{
    //  console.log(data)

    //     }

    //     )
  }

  editProduct(product: any): void {
    this.editingProduct = product;

  }

  deleteProduct(product: any): void {
    console.log(product.id)


    this.apiService.deleteProduct(product.id).subscribe((data:any)=>{
         console.log(data)
         this.openSnackBar('Product deleted', 'OK');

    },(error)=>{
      console.log(error)
    });






    const index = this.featuredArtworks.indexOf(product);
    if (index !== -1) {
      this.featuredArtworks.splice(index, 1);
    }
  }

  confirmAdd(product: any): void {
    //   {
    //     "id": 125,
    //     "name": "producthsdfhghdf",
    //     "description": "hgscfg",
    //     "stock": "011",
    //     "price": "011",
    //     "image": "fdgfsdgsdfg"
    // }
    const newProduct = {
      name: product.name,
      description: product.description,
      stock: product.stock,
      price: product.price,
      image: product.image,
      category_id: product.category_id,
      status: 'active',
    };
    console.log(product);
    this.apiService.createProduct(newProduct).subscribe(
      (data: any) => {
        console.log(data);
        this.openSnackBar('Product was created success', 'OK')
      },
      (error) => {
        console.log(error);
      }
    );
    // product.editing = false;
    this.editingProduct = null;
    this.adding=false;

    // Send PUT request to update the product data on the backend
  }
  confirmEditing(product: any): void {
    //   {
    //     "id": 125,
    //     "name": "producthsdfhghdf",
    //     "description": "hgscfg",
    //     "stock": "011",
    //     "price": "011",
    //     "image": "fdgfsdgsdfg"
    // }
    const newProduct = {
      name: product.name,
      description: product.description,
      stock: product.stock,
      price: product.price,
      image: product.image,
      category_id: product.category_id,
      status: product.status
    };
    console.log(product);
    this.apiService.updateProduct(product.id,newProduct).subscribe(
      (data: any) => {
        console.log(data);
        this.openSnackBar('Product was editing successfully', 'OK  !!!')
      },
      (error) => {
        console.log(error);
      }
    );
    // product.editing = false;
    this.editingProduct = null;
    this.adding=false;

    // Send PUT request to update the product data on the backend
  }

  cancelEdit(product: any): void {
    // product.editing = false;
    this.editingProduct = null;
  }

  generateProductId(): number {
    // Replace this with logic to generate a unique product ID
    return Math.floor(Math.random() * 1000) + 1;
  }

  selectProduct(selectedProduct: any): void {
    // Implement the logic for selecting a product from search results
    // This could include setting the selected product as active or navigating to its details page
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

  ngOnInit(): void {
    this.loadProducts();
    // this.dataSource.paginator = this.paginator;
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
    // this.dataSource.paginator = this.paginator;
  }
  hoveredArtwork: any | null = null; // Initialize hoveredArtwork as null

  // Load products from the API
  loadProducts(): void {
    this.apiService.getProducts().subscribe(
      (data: Artwork[]) => {
        // this.dataSource.data = data;
        this.featuredArtworks = data;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }
}
