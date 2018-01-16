import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.scss']
})
export class GmapsComponent implements OnInit {
  showMap: boolean = false;
  selectPoint: Marker;
  zoom: number = 5;
  markerUrl = 'assets/map-marker.png';
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
  center = {
    lat: 25.886, 
    lng: -70.268
  }

  infoOptions = {
    border: false,
    borderRadius: '10px',
    closeOnMapClick: true,
    closeWhenOthersOpen: true,
    fontColor: '#0091EA',
    maxWidth: '50',
    padding: '10px 30px'

  }
  constructor() { }

  ngOnInit() {
  }

  selectOnChange() {
    console.log(this.selectPoint);
  }
  toggleMap() {
    this.showMap = !this.showMap;
    // console
  }

}
export interface Marker {
  lat: number,
  lng: number,
  label?: string;
	draggable: boolean;
}