import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  ngOnInit() {
  }

  login() {
    const val = this.form.value;

    if (val.user && val.password) {
        this.authService.login(val.user, val.password);
    }
  }

}
