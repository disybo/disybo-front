import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-location',
  templateUrl: './vehicle-location.component.html',
  styleUrls: ['./vehicle-location.component.css']
})
export class VehicleLocationComponent implements OnInit {
  lat: number = 60.192059;
  lng: number = 24.945831;

  zoom: number = 12;

  styles: any = [
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
