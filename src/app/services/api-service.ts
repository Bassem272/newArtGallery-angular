import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Artwork } from '../interfaces/artwork';
import { Order } from '../interfaces/order';
import { User } from '../interfaces/user';
import { Customer } from '../interfaces/customer';
import { LocalStorageService } from './localStorage.service';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  defaultProduct: Artwork = {
    id: 1,
    name: 'Artwork Name',
    description: 'Description',
    price: 100,
    stock: 10,
    category_id: 1,

    image: 'image-url.jpg',
  };


  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.getTokenandUserid();

  }

getTokenandUserid(){
const  token = this.localStorageService.get('token');
const user  = this.localStorageService.get('user');

 const role= user.role;
 console.log( role)
 console.log(token);
 console.log(user)
 const  headerso = new HttpHeaders({

    'Authorization': 'Bearer '+token,
    'role': role
  });
  console.log(headerso)
return headerso;


}

headers = this.getTokenandUserid();







  // token = '2|laravel_sanctum_OHHRthNNEsL7zIyff85uhRqH9JTLaOupBrfILAWqc8d34ef3';


  // <!---------------------------- customer section-->
  // <!---------------------------- customer section-->

  getCustomers(): Observable<Customer[]> {
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const,
    };
    return this.http.get<Customer[]>(
      'http://127.0.0.1:8000/api/customers/',
      requestOptions
    );
  }
  getCustomer(id: number): Observable<any> {
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,

    };
    return this.http.get(
      'http://127.0.0.1:8000/api/customers/' + id,
      requestOptions
    );
  }
  updateCustomer(id: number, body: any): Observable<Customer> {
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const,
      body,
    };
    return this.http.put<Customer>(
      'http://127.0.0.1:8000/api/customers/' + id,
      requestOptions
    );
  }

  // <!---------------------------- product section-->
  // <!---------------------------- product section-->

  getProducts(): Observable<Artwork[]> {
    let token = this.localStorageService.get('token');
    // Include the token in the request headers
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      role: 'customer',
    });

    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const,
    };
    return this.http.get<Artwork[]>(
      'http://127.0.0.1:8000/api/products/',
      requestOptions
    );
  }

  getProduct(id: number): Observable<any> {
    // let token = this.localStorageService.get('token');
    // let user = this.localStorageService.get('customer');
    // Include the token in the request headers
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer ' + token,
    //   role: user.role,
    // });
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const,
    };
    return this.http
      .get<any>('http://127.0.0.1:8000/api/products/' + id, requestOptions)
      .pipe(
        catchError((error: any) => {
          // Handle the error, e.g., log it or return a default product
          console.error('Error fetching product:', error);
          return of(this.defaultProduct);
        })
      );
  }

  createProduct(body: any): Observable<any> {
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers

    };
    return this.http.post(
      'http://127.0.0.1:8000/api/products',
      body,
      requestOptions
    );
  }
  updateProduct(id: number, body: any): Observable<Artwork> {
    ////>>>>>>>>>>update
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const,
      body,
    };
    return this.http.put<Artwork>(
      'http://127.0.0.1:8000/api/products/' + id,body,
      requestOptions
    );
  }
  deleteProduct(id: number): Observable<Artwork> {
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const,
    };
    return this.http.delete<Artwork>(
      'http://127.0.0.1:8000/api/products/' + id,
      requestOptions
    );
  }

  searchByName(ji: string): Observable<any> {
    const body = { name: ji };
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const,
      mode: 'no-cors',
    };
    return this.http.post('http://127.0.0.1:8000/search', body, requestOptions);
  }
  //------get methods can work but the post method are more secure and better for complex queries -------------------------------------------------
  // searchByName(name:string): Observable<Artwork> {
  //   // const body={"keyWord":name}
  //   // Pass headers in the request options
  //   const requestOptions = { headers: this.headers, responseType: 'json' as const };
  //   return this.http.get<Artwork>('http://127.0.0.1:8000/api/products/search'+name,requestOptions);
  // }
  //----------------------------------------------------------------------------

  // <!---------------------------- users section-->
  // <!---------------------------- users section-->

  getUsers(): Observable<User[]> {
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const,
    };
    return this.http.get<User[]>(
      'http://127.0.0.1:8000/api/users/',
      requestOptions
    );
  }

  getUser(id: number): Observable<User> {
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const,
    };
    return this.http.get<User>(
      'http://127.0.0.1:8000/api/users/' + id,
      requestOptions
    );
  }

  createUser(body: any): Observable<User> {
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const,
    };
    return this.http.post<User>(
      'http://127.0.0.1:8000/api/users',
      body,
      requestOptions
    );
  }

  updateUser(id: number, body: any): Observable<User> {
    ////>>>>>>>>>>update
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const,
      body,
    };
    return this.http.put<User>(
      'http://127.0.0.1:8000/api/users/' + id,
      requestOptions
    );
  }
  deleteUser(id: number): Observable<User> {
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const,
    };
    return this.http.delete<User>(
      'http://127.0.0.1:8000/api/users/' + id,
      requestOptions
    );
  }

  // <!---------------------------- order section-->
  // <!---------------------------- order section-->

  getOrders(): Observable<any> {
    ////>>>>>>>>>>update
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const

    };
    return this.http.get(
      'http://127.0.0.1:8000/api/orders/' ,
      requestOptions
    );
  }


  changeStatus(id: number): Observable<any> {
    ////>>>>>>>>>>update
    // Pass headers in the request options
    const body={"order_status": "completed"}
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const

    };
    return this.http.put<any>(
      'http://127.0.0.1:8000/api/orders/' + id, body,
      requestOptions
    );
  }


  updateOrder(id: number, body: any): Observable<Order> {
    ////>>>>>>>>>>update
    // Pass headers in the request options
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const

    };
    return this.http.put<any>(
      'http://127.0.0.1:8000/api/orders/' + id, body,
      requestOptions
    );
  }

  createOrder(body: any): Observable<any> {
    const requestOptions = {
      headers: this.headers,
      responseType: 'json' as const,
    };
    return this.http.post(
      'http://127.0.0.1:8000/api/orders',
      body,
      requestOptions
    );
  }
}
