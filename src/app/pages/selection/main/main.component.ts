import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data: any = [
    {
      name: 'alex',
      description: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
      image:
        'https://static6.depositphotos.com/1092937/587/i/600/depositphotos_5874485-stock-photo-forest-footpath.jpg',
      stars: 1,
      difficulty: 'Facil',
      duration: 5,
      distance: 25,
      location: 'Cuenca',
      lat: '0.525125',
      lng: '-0.525125',
    },
    {
      name: 'juan',
      description: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
      image:
        'https://static6.depositphotos.com/1092937/587/i/600/depositphotos_5874485-stock-photo-forest-footpath.jpg',
      stars: 2.5,
      difficulty: 'Facil',
      duration: 5,
      distance: 25,
      location: 'Cuenca',
      lat: '0.525125',
      lng: '-0.525125',
    },
    {
      name: 'pedro',
      description: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
      image:
        'https://static6.depositphotos.com/1092937/587/i/600/depositphotos_5874485-stock-photo-forest-footpath.jpg',
      stars: 1,
      difficulty: 'Facil',
      duration: 5,
      distance: 25,
      location: 'Cuenca',
      lat: '0.525125',
      lng: '-0.525125',
    },
    {
      name: 'isabel',
      description: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
      image:
        'https://static6.depositphotos.com/1092937/587/i/600/depositphotos_5874485-stock-photo-forest-footpath.jpg',
      stars: 1,
      difficulty: 'Facil',
      duration: 5,
      distance: 25,
      location: 'Cuenca',
      lat: '0.525125',
      lng: '-0.525125',
    },
    {
      name: 'juan',
      description: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
      image:
        'https://static6.depositphotos.com/1092937/587/i/600/depositphotos_5874485-stock-photo-forest-footpath.jpg',
      stars: 1,
      difficulty: 'Facil',
      duration: 5,
      distance: 25,
      location: 'Cuenca',
      lat: '0.525125',
      lng: '-0.525125',
    },
  ];
}
