import { UserLogin } from './../../models/UserLogin';
import { SharedService } from './../../services/shared.service';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  userLogin = new UserLogin('', '');

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService, private sharedService: SharedService) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  ngOnInit() {}

  login() {
    const val = this.form.value;

    if (val.user && val.password) {
      this.userLogin = new UserLogin(val.user, val.password);
      console.log(this.userLogin);
      this.loginService.login(this.userLogin).subscribe(response => {
        //localStorage.setItem('token', response.data);
        this.sharedService.token = response.data;
        this.router.navigate(['home']);
      }, err => {


      });
    }
  }

}
