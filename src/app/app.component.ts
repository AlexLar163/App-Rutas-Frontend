import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCollapsed = false;
  isCollapseds = true;
  isVisible = false;
  isLogin = false;
  isRegister = false;
  username: string = '';
  password: string = '';
  email: string = '';
  isConfirmLoading = false;

  handleUsername(data: string) {
    this.username = data;
  }
  handlePassword(data: string) {
    this.password = data;
  }
  handleEmail(data: string) {
    this.email = data;
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
      .then((response) => console.log(response.data));
  }
  register() {
    let username = this.username;
    let password = this.password;
    let email = this.email;
    axios
      .post('http://localhost:3000/user/register', { username, password, email })
      .then((response) => console.log(response.data));
  }
  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isLogin && this.login();
    this.isRegister && this.register();
  }
}
