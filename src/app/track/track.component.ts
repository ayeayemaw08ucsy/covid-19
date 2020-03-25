import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';

interface marker {
  lat: number,
  lng: number,
  label?: string,
  draggable: boolean
}
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {

  latitude = 19.920272543814104;
  longitude = 95.77653629687501;
  backgroundColor = 'white';
  locationChosen = false;
  //minClusterSize = 50;

  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'C',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'C',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  },
    // repeat
      {
		  lat: 51.673800,
		  lng: 7.815900,
		  label: 'S',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'S',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]
 
  onChooseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.backgroundColor = 'yellow';
    this.locationChosen = true;
    this.markers.push({
      lat: event.coords.lat,
      lng: event.coords.lng,
      draggable: true
    })
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
}
