import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LocalStorageService } from './localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  // Define headers using HttpHeaders
  token = '2|laravel_sanctum_OHHRthNNEsL7zIyff85uhRqH9JTLaOupBrfILAWqc8d34ef3';
  headers = new HttpHeaders({

    Authorization: 'Bearer 9|IBvKkmX4hru69Awyw3zO09l5UK1WGhLs1zqLnObT08706d78',
    role: 'admin',
  });



  register(bodyy: any): Observable<any> {


    // const body = {
    //   "name": "assamaert",
    //   "email": "assamater@gmail.com",
    //   "password": "Asdfg1234"
    // };
    // Pass headers in the request options
    // const requestOptions = { headers: Headers };
    return this.http.post('http://127.0.0.1:8000/api/register', bodyy);
  }

  logIn(_data: any): Observable<any> {
    // let customer = this.localStorageService.get('customer');

    // // Include the token in the request headers
    // const headers = new HttpHeaders({
    //   // Authorization: `Bearer ${token}`,
    //   role: customer.role,
    // });
    // // Pass headers in the request options
    const body = {
      "email": "assewwwo@Sana.com",
    "password": "asseemm"
    };
    // Pass headers in the request options
    // const requestOptions = { headers: headers };
    return this.http.post('http://127.0.0.1:8000/api/login', _data);
  }


//   {email: 'sss@sss.com', password: 'Asdf1234'} 'object'
// login.component.ts:48 {message: 'Login successful',
//  token: '23|KBCtlgmTLc871M3xiLA7agm1cJm6kvFZHEUPILqN2e16bb4b',
//   user: {…}}message: "Login successful"token: "23|KBCtlgmTLc871M3xiLA7agm1cJm6kvFZHEUPILqN2e16bb4b"user: address: nullcode: nullcreated_at: "2023-09-20T18:28:01.000000Z"email: "sss@sss.com"email_verified_at: nullid: 217name: "asssssss"phone: nullrole: "customer"updated_at: "2023-09-20T18:28:01.000000Z"[[Prototype]]: Object[[Prototype]]: Object
// login.component.ts:51 23|KBCtlgmTLc871M3xiLA7agm1cJm6kvFZHEUPILqN2e16bb4b

  logout(): Observable<any> {
    // Include the token in the request headers
    let token = this.localStorageService.get('token');
    // Include the token in the request headers
    const headers = new HttpHeaders({
      Authorization: 'Bearer '+token,
  role: 'customer'
    });
    // Pass headers in the request options
    const requestOptions = { headers: headers};
    return this.http.post('http://127.0.0.1:8000/api/logout',{}, requestOptions);
  }

  adminLogin(data: any): Observable<any> {
    const headers = new HttpHeaders({
      role: 'admin',
    });
    const body = {
      "email": "assewwwo@Sana.com",
    "password": "asseemm"
    };
    const requestOptions = { headers: headers };
    return this.http.post('http://127.0.0.1:8000/api/login', body);
  }
  adminLogout(data: any): Observable<any> {
    // Include the token in the request headers
    let token = this.localStorageService.get('token');
    // Include the token in the request headers
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      role: 'admin',
    });
    const requestOptions = { headers: headers };
    return this.http.post('http://127.0.0.1:8000/logout', requestOptions);
  }
}
