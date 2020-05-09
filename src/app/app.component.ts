import { SharedService } from './services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SGE';
  usuarioLogado: boolean;

  constructor(private sharedService: SharedService) {
    this.usuarioLogado = sharedService.isLoggedIn();
  }
}
