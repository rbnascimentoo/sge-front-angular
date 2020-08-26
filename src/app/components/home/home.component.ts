import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sharedService: SharedService;

  constructor(private route: Router) {
    this.sharedService = SharedService.getInstance();
  }

  ngOnInit() {
    this.redirect();
  }

  redirect() {
    if (!this.sharedService.isLoggedIn()) {
      this.route.navigate(['login']);
    }
  }

}
