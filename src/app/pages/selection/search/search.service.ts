import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}
  async search(keyword: string) {
    return await axios
      .post('http://localhost:3000/routes/getSearchRoutes', { name: keyword })
      .then((res) => res.data);
  }
}
