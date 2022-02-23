import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public data: any;
  constructor() {}
  async getDataMain(): Promise<any> {
    return await axios
      .get('http://localhost:3000/routes/getAllRoutes')
      .then((response) => {
        return response.data;
      });
  }
}
