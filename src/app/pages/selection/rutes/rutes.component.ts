import { Component, OnInit } from '@angular/core';
import { RutesService } from './rutes.service';

@Component({
  selector: 'app-rutes',
  templateUrl: './rutes.component.html',
  styleUrls: ['./rutes.component.css'],
})
export class RutesComponent implements OnInit {
  public dataEasy: any = [];
  public dataNormal: any = [];
  public dataHard: any = [];
  constructor(private rutesService: RutesService) {}

  async ngOnInit(): Promise<void> {
    this.dataEasy = await this.rutesService.getEasyRutes();
    this.dataNormal = await this.rutesService.getNormalRutes();
    this.dataHard = await this.rutesService.getHardRutes();
  }
}
