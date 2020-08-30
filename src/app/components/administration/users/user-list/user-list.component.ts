import { SharedService } from './../../../../services/shared.service';
import { User } from './../../../../models/User';
import { UserService } from './../../../../services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: Array<User> = new Array<User>();
  user: User;

  constructor(private router: Router, private userService: UserService, private sharedService: SharedService) { }

  ngOnInit() {
    this.search();
  }

  search() {

    localStorage.setItem('iduseredit', null);

    this.userList = new Array<User>();
    this.userService.findAll().subscribe( response => {

      Array.of(response.data).forEach(element => {
        if (element !== undefined) {
          this.userList.push(element);

        }
      });

    }, err => {
      console.log('error', err);
    });

  }

  showDataTable(): boolean {
    return this.userList != null;
  }

  new() {
    localStorage.setItem('iduseredit', null);
    this.router.navigate(['user/new']);

  }

  edit(id: string) {
    console.log('editUser id=', id);

    localStorage.setItem('iduseredit', id);
    this.router.navigate(['user/edit']);
  }

  delete(id: string) {
    this.userService.delete(id).subscribe(data => {
      this.search();
    }, err => {
      console.log('error ao deletar usuário.');
    });
  }

}
