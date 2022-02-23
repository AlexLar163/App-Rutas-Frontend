import { Component, OnInit } from '@angular/core';
import { RuteDetailService } from './rute-detail.service';

@Component({
  selector: 'app-rute-detail',
  templateUrl: './rute-detail.component.html',
  styleUrls: ['./rute-detail.component.css'],
})
export class RuteDetailComponent implements OnInit {
  public name: string = '';
  public description: string = '';
  public image: string = '';
  public stars: number = 0;
  public difficulty: string = '';
  public duration: number = 0;
  public distance: number = 0;
  public location: string = '';
  public lat: number = 0;
  public lng: number = 0;
// cambiar aqui
  constructor(
    private ruteDetailService: RuteDetailService
  ) {}
  ngOnInit(): void {
    const localData = localStorage.getItem('dataCard');
    const data = localData && JSON.parse(localData);
    this.name = data.name;
    this.description = data.description;
    this.image = data.image;
    this.stars = data.stars;
    this.difficulty = data.difficulty;
    this.duration = data.duration;
    this.distance = data.distance;
    this.location = data.location;
    this.lat = parseFloat(data.lat);
    this.lng = parseFloat(data.lng);
  }
  favorite() {
    const localData = localStorage.getItem('dataCard');
    const data = localData && JSON.parse(localData);
    this.ruteDetailService.favorite(data);
  }
}
