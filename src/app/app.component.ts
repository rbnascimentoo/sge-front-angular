import { SharedService } from './services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public sharedService: SharedService;
  showTemplate: boolean;

  constructor() {
    this.sharedService = SharedService.getInstance();
  }


  ngOnInit() {
    this.sharedService.showTemplate.subscribe(show =>
      this.showTemplate = show
    );
  }

  isLoggeIn() {
    return this.sharedService.isLoggedIn();
  }


}
