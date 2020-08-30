import { UserAddComponent } from './components/administration/users/user-add/user-add.component';
import { UserListComponent } from './components/administration/users/user-list/user-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClientAddComponent } from './components/manager/clients/client-add/client-add.component';
import { ClientListComponent } from './components/manager/clients/client-list/client-list.component';
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
  {path: 'product', component: ClientListComponent},
  {path: 'product/new', component: ClientAddComponent},
  {path: 'product/edit', component: ClientAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
