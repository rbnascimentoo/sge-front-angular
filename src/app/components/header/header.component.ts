import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public sharedService: SharedService;

  constructor(private router: Router) {
    this.sharedService = SharedService.getInstance();
  }

  ngOnInit() {
  }

  logOut() {
    this.sharedService.logOut();
    this.router.navigate(['login']);
  }

}
