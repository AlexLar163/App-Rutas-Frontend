import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rutes',
  templateUrl: './rutes.component.html',
  styleUrls: ['./rutes.component.css'],
})
export class RutesComponent implements OnInit {
  data: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  constructor() {}

  ngOnInit(): void {}
}
