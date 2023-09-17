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
  // token = '5|laravel_sanctum_PADzU30pjdLJbsH91hY8LRVQycRoYZdm0NcZYbZPaf05ee97';
  // headers = new HttpHeaders({
  //   // 'Connection': 'keep-alive'
  //   // 'Authorization': 'Bearer 2|laravel_sanctum_OHHRthNNEsL7zIyff85uhRqH9JTLaOupBrfILAWqc8d34ef3',
  //   // 'role': 'admin',requestOptions
  // });
  // ,requestOptions
  register(data: any): Observable<any> {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    // Pass headers in the request options
    const requestOptions = { headers: Headers };
    return this.http.post('http://127.0.0.1:8000/register', body);
  }

  logIn(data: any): Observable<any> {
    let customer = this.localStorageService.get('customer');

    // Include the token in the request headers
    const headers = new HttpHeaders({
      // Authorization: `Bearer ${token}`,
      role: customer.role,
    });
    // Pass headers in the request options
    const body = {
      email: data.email,
      password: data.password,
    };
    // Pass headers in the request options
    const requestOptions = { headers: headers };
    return this.http.post('http://127.0.0.1:8000/login', body, requestOptions);
  }

  logout(data: any): Observable<any> {
    // Include the token in the request headers
    let token = this.localStorageService.get('token');
    // Include the token in the request headers
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      role: 'customer',
    });
    // Pass headers in the request options
    const requestOptions = { headers: headers };
    return this.http.post('http://127.0.0.1:8000/logout', requestOptions);
  }

  adminLogin(data: any): Observable<any> {
    const headers = new HttpHeaders({
      role: 'admin',
    });
    const body = {
      email: data.email,
      password: data.password,
    };
    const requestOptions = { headers: headers };
    return this.http.post('http://127.0.0.1:8000/login', body, requestOptions);
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
