import { UserAddComponent } from './components/administration/users/user-add/user-add.component';
import { AuthInteceptor } from './services/auth/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';
import { UserListComponent } from './components/administration/users/user-list/user-list.component';
import { ClientAddComponent } from './components/manager/clients/client-add/client-add.component';
import { ClientListComponent } from './components/manager/clients/client-list/client-list.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { RequestAddComponent } from './components/manager/requests/request-add/request-add.component';
import { RequestListComponent } from './components/manager/requests/request-list/request-list.component';
import { ProductListComponent } from './components/manager/products/product-list/product-list.component';
import { ProductAddComponent } from './components/manager/products/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    UserAddComponent,
    UserListComponent,
    ClientAddComponent,
    ClientListComponent,
    DashboardComponent,
    RequestAddComponent,
    RequestListComponent,
    ProductListComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInteceptor,
      multi: true
    }
  ],
  exports: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
