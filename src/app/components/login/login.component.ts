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

  message: string;
  form: FormGroup;
  userLogin = new UserLogin('', '');
  valide: boolean;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService, private sharedService: SharedService) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  ngOnInit() {}

  login() {

    this.valide = true;

    const valueForm = this.form.value;

    if (valueForm.user && valueForm.password) {
      this.userLogin = new UserLogin(valueForm.user, valueForm.password);
      this.loginService.login(this.userLogin).subscribe(response => {
        this.sharedService.token = response.data;
        this.sharedService.showTemplate.emit(true);
        localStorage.setItem('token', response.data);
        this.router.navigate(['home']);
      }, err => {
        this.sharedService.token = null;
        localStorage.setItem('token', null);
        this.sharedService.showTemplate.emit(false);
        this.message = 'Usuário não existente.';

      });
    }
  }

  cancel() {
    this.userLogin = new UserLogin('', '');
    this.valide = true;
    this.message = '';
    location.reload();
  }

  userErrorClass() {
    if (this.message || (!this.form.value.user && this.valide)) {
      return 'is-danger';
    }
    return '';
  }

  passwordErrorClass() {
    if (this.message || (!this.form.value.password && this.valide)) {
      return 'is-danger';
    }
    return '';
  }

}
