import { SharedService } from './services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public sharedService: SharedService;
  showTemplate: boolean;

  constructor() {
    this.sharedService = SharedService.getInstance();
    //this.showTemplate = false;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.sharedService.showTemplate.subscribe(show =>
      this.showTemplate = show
    );
  }


}
