import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  // user: User = new User();
  msjError!: string;

  // constructor(public router: Router, public authSvc: AuthService) { }
  constructor(public router: Router) { }
  ngOnInit(): void {
  }

  async login() {
    // this.user.email = this.email;
    // this.user.password = this.password;
    // this.authSvc.onLogin(this.user);
    // console.log(this.authSvc.msjError);
    // if (this.authSvc.msjError != "") {
    //   this.msjError = this.authSvc.msjError;
    // }
  }

  async logEliseo() {
  //   console.log(this.user);
  //   this.email = 'leliseo89@hotmail.com';
  //   this.password = '123456';
  //   console.log(this.authSvc.msjError);
   }
}
