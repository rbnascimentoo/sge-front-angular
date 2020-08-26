import { SharedService } from './services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private sharedService: SharedService) {

  }

  ngOnInit() {
  }

  isLoggeIn() {
    return this.sharedService.isLoggedIn();
  }


}
