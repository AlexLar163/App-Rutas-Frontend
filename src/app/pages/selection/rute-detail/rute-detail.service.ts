import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class RuteDetailService {
  constructor() {}
  favorite(data: any) {
    const localData = localStorage.getItem('login');
    const user = localData && JSON.parse(localData);
    axios
      .post('http://localhost:3000/user/addfavorites', {
        _id: user._id,
        favorites: [data],
      })
      .then((res) => {
      });
  }
}
