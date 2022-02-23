import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MyRutesService {
  constructor() {}
  async getFavoriteRutes(data: any) {
    console.log(data);
    return await axios
      .post('http://localhost:3000/user/getfavorites', {
        _id: data._id,
      })
      .then((res) => res.data);
  }
}
