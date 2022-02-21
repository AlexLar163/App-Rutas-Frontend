import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  email: string;

  constructor() {
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
  handleEmail(data: string){
    this.email = data;
  }

  ngOnInit(): void {}
}
