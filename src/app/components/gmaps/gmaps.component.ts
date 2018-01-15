import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.scss']
})
export class GmapsComponent implements OnInit {
  zoom: number = 5
  markerUrl = 'assets/map-marker.png'
  triangleCoords: Marker[] = [
    {
      lat: 25.774,
      lng: -80.190,
      label: 'Miami',
      draggable: false
    },
    {
      lat: 18.466, 
      lng: -66.118,
      label: 'San Juan',
      draggable: false
    },
    {
      lat: 32.321, 
      lng: -64.757,
      label: 'Bermuda',
      draggable: false
    }
  ];
  center = {lat: 25.886, lng: -70.268}
  constructor() { }

  ngOnInit() {
  }

}
export interface Marker {
  lat: number,
  lng: number,
  label?: string;
	draggable: boolean;
}