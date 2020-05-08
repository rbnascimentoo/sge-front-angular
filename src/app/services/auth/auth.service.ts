import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  API_URL = 'https://security-core-app.herokuapp.com/';
  TOKEN_KEY = 'token';

  constructor(private http: HttpClient, private router: Router) { }

  get token() {
      return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
      return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
      localStorage.removeItem(this.TOKEN_KEY);
      this.router.navigateByUrl('/');
  }

  login(user: string, pass: string) {
      const headers = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
      };

      const data = {
          login: user,
          password: pass
      };

      this.http.post(this.API_URL + 'user/login', data, headers).subscribe(
          (res: any) => {
              localStorage.setItem(this.TOKEN_KEY, res.data);

              this.router.navigateByUrl('/home');
          }, err => {
            //TODO
          }
      );
  }

}
