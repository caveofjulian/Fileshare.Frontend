import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseUrl = 'https://localhost:5001/api/auth/';
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {   }

  getDecodedToken(): any {
    return this.jwtHelper.decodeToken(localStorage.getItem('token'));
  }

  login(model: object) {
    return this.http.post(this.baseUrl + 'login', model)
    .pipe(map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
      }
    }));
  }

  register(model: object): any {
    return this.http.post(this.baseUrl + 'register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

}
