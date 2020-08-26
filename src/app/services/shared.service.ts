import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static instance: SharedService = null;
  token: string;
  showTemplate = new EventEmitter<boolean>();

  constructor() {
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new SharedService();
    }
    return this.instance;
  }

  isLoggedIn(): boolean {
    return this.token != null || localStorage.getItem('token') != null;
  }

  logOut() {
    this.showTemplate.emit(false);
    localStorage.setItem('token', null);
    this.token = null;
    localStorage.clear();
  }

  setToken(token: string) {
    this.token = token;
    this.showTemplate.emit(true);
    localStorage.setItem('token', token);
  }

}
