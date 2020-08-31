import { UserAddComponent } from './components/administration/users/user-add/user-add.component';
import { UserListComponent } from './components/administration/users/user-list/user-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClientAddComponent } from './components/manager/clients/client-add/client-add.component';
import { ClientListComponent } from './components/manager/clients/client-list/client-list.component';
import { ProductAddComponent } from './components/manager/products/product-add/product-add.component';
import { ProductListComponent } from './components/manager/products/product-list/product-list.component';
import { RequestAddComponent } from './components/manager/requests/request-add/request-add.component';
import { RequestListComponent } from './components/manager/requests/request-list/request-list.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user', component: UserListComponent},
  {path: 'user/new', component: UserAddComponent},
  {path: 'user/edit', component: UserAddComponent},
  {path: 'client', component: ClientListComponent},
  {path: 'client/new', component: ClientAddComponent},
  {path: 'client/edit', component: ClientAddComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'product/new', component: ProductAddComponent},
  {path: 'product/edit', component: ProductAddComponent},
  {path: 'request', component: RequestListComponent},
  {path: 'request/new', component: RequestAddComponent},
  {path: 'request/edit', component: RequestAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
