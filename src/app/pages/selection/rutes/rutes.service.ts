import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class RutesService {
  constructor() {}

  async getEasyRutes() {
    return await axios
      .post('http://localhost:3000/routes/getDifficultRoutes', {
        difficulty: 'Facil',
      })
      .then((res) => res.data);
  }
  async getNormalRutes() {
    return await axios
      .post('http://localhost:3000/routes/getDifficultRoutes', {
        difficulty: 'Normal',
      })
      .then((res) => res.data);
  }
  async getHardRutes() {
    return await axios
      .post('http://localhost:3000/routes/getDifficultRoutes', {
        difficulty: 'Dificil',
      })
      .then((res) => res.data);
  }
}
