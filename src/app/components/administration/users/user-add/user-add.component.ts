import { User } from './../../../../models/User';
import { UserService } from './../../../../services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: User;
  idUser: string = null;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.createNewUser();

    this.idUser = localStorage.getItem('iduseredit');

    if (this.idUser !== undefined && this.idUser != null) {
      this.userService.findById(this.idUser).subscribe(response => {
            this.user = response.data;
        }, err => {
            console.log('erro ao buscar usuário', err);

        });
    }

  }

  createNewUser() {
    this.user = new User(null, null, null, null, null, null);

    // this.nomeValid = false;
    // this.apelidoValid = false;
  }

  saveUser() {

    console.log(this.user);


    if (this.user.id != null && this.user.id > 0) {
      this.userService.edit(this.user).subscribe(data => {
        this.createNewUser();
        this.router.navigate(['user']);
      }, err => {
        console.log('erro ao atualizar usuário!');
      });
    } else {
      this.userService.save(this.user).subscribe(data => {
        this.createNewUser();
        this.router.navigate(['user']);
      }, err => {
        console.log('erro ao salvar usuário!');
      });
    }
  }

  cancel() {
    this.createNewUser();
    this.router.navigate(['user']);
  }

}
