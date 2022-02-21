import { Component, Input, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardData: any;
  constructor(private serviceCard: CardService) {}

  ngOnInit(): void {}
  handleCardClick() {
    localStorage.setItem('dataCard', JSON.stringify(this.cardData));
  }
}
