import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  isVisible = false;
  isConfirmLoading = false;

  constructor(private modalService: NzModalService) {
    this.username = '';
    this.password = '';
    this.email = '';
  }
  handleUsername(data: string) {
    this.username = data;
  }
  handlePassword(data: string) {
    this.password = data;
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
  }
  login() {
    let username = this.username;
    let password = this.password;
    axios
      .post('localhost:3000/user/login', { username, password })
      .then((response) => console.log(response));
  }
  ngOnInit(): void {}
}
