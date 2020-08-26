import { User } from './../../../models/User';
import { SharedService } from './../../../services/shared.service';
import { UserService } from './../../../services/user/user.service';
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
    this.userService.findAll().subscribe( response => {
      console.log(response);

      Array.of(response.data).forEach(element => {
        if (element !== undefined) {
          // this.user = new User(element[0], element[1], element[2], element[3], element[5], element[6]);
          // this.userList.push(this.user);
          this.userList.push(element[0]);
        }
      });

      console.log(this.userList);


    }, err => {
      console.log('error', err);
    });

  }

  showDataTable() {
    return this.userList != null
    && this.userList[0] != null;
  }

  newUser() {

  }

  editUser() {

  }

  deleteUser() {

  }

}
