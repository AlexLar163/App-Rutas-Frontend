import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  data: any = [];
  constructor(private mainService: MainService) {}

  async ngOnInit(): Promise<void> {
    this.data = await this.mainService.getDataMain();
  }
}
