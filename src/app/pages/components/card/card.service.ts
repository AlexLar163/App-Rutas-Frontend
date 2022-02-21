import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  @Output() trigerClickCard: EventEmitter<any> = new EventEmitter();

  constructor() {}
}
