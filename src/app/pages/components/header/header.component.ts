import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  isCollapseds = true;
  isVisible = false;
  isLogin = false;
  isRegister = false;
  username: string = '';
  password: string = '';
  email: string = '';
  isConfirmLoading = false;

  constructor() {}

  handleUsername(data: string) {
    this.username = data;
  }
  handlePassword(data: string) {
    this.password = data;
  }
  handleEmail(data: string) {
    this.email = data;
  }

  localExist() {
    return localStorage.getItem('login') !== null;
  }
  logout() {
    localStorage.removeItem('login');
  }
  showModal(option: number): void {
    this.isVisible = true;
    if (option === 1) {
      this.isLogin = true;
      this.isRegister = false;
    } else if (option === 2) {
      this.isLogin = false;
      this.isRegister = true;
    }
  }
  login() {
    let username = this.username;
    let password = this.password;
    axios
      .post('http://localhost:3000/user/login', {
        username: username,
        password: password,
      })
      .then((response) => {
        response.data &&
          localStorage.setItem('login', JSON.stringify(response.data));
      });
  }
  register() {
    let username = this.username;
    let password = this.password;
    let email = this.email;
    axios
      .post('http://localhost:3000/user/register', {
        username,
        password,
        email,
      })
      .then((response) => console.log(response.data));
  }
  handleOk(): void {
    this.isConfirmLoading = true;
    this.isLogin && this.login();
    this.isRegister && this.register();
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  ngOnInit(): void {}
}
