import { MapDirectionsService } from '@angular/google-maps';
import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @Input() origin: any;
  @Input() destination: any;
  public center: google.maps.LatLngLiteral = {
    lat: -2.877778,
    lng: -78.986583,
  };
  public zoom = 10;

  readonly directionsResults$: Observable<
    google.maps.DirectionsResult | undefined
  >;
  constructor(mapDirectionsService: MapDirectionsService) {
    let a = localStorage.getItem('dataCard') || '{}';
    let origin = JSON.parse(a).origin;
    let destination = JSON.parse(a).destination;
    const request: google.maps.DirectionsRequest = {
      destination: { lat: parseFloat(origin.lat), lng: parseFloat(origin.lng) },
      origin: {
        lat: parseFloat(destination.lat),
        lng: parseFloat(destination.lng),
      },
      travelMode: google.maps.TravelMode.DRIVING,
    };
    this.directionsResults$ = mapDirectionsService
      .route(request)
      .pipe(map((response: any) => response.result));
  }

  ngOnInit(): void {}
}
