import { Component, OnInit } from '@angular/core';
import { MyRutesService } from './my-rutes.service';

@Component({
  selector: 'app-my-rutes',
  templateUrl: './my-rutes.component.html',
  styleUrls: ['./my-rutes.component.css'],
})
export class MyRutesComponent implements OnInit {
  public data: any = [];

  constructor(private myRutesService: MyRutesService) {}

  async ngOnInit(): Promise<void> {
    const localData = localStorage.getItem('login');
    const data = localData && JSON.parse(localData);
    this.data = await this.myRutesService.getFavoriteRutes(data);

  }
}
