import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;

  flyTo = [{
    location: "POL",
    longitude: 72.6456098,
    latitude: 32.9387423
  },
  {
    location: "Bank Alfalah",
    longitude: 73.0587268,
    latitude: 33.6606294
  },
{
  location: "Pakistan Petrolium Limited",
  longitude: 73.0797761,
  latitude: 33.7031608
},
{
  location: "HBL",
  longitude: 73.0560349,
  latitude: 33.6140751
}]

  constructor() { }

  ngOnInit(): void {
    this.loadMap();
    this.createMarker();
  }

  loadMap() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      zoom: 4,
      center: [72.8692413, 33.6582284],
      style: 'mapbox://styles/mapbox/streets-v11',
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  flyToLocation(longitude, latitude) {
    console.log(longitude, latitude)
    this.map.flyTo({
      center: [
        longitude,
        latitude
      ],
      zoom: 12,
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
  }

  createMarker() {
    for( let marker of this.flyTo) {
      var el = document.createElement('div');
        el.style.height = '50px';
        el.style.width = '50px';
        // var list = document.createElement('li')
        // list.innerHTML = (marker.location)
        // list.style.paddingLeft = '10px'
        // list.style.color = 'white'
        // el.appendChild(list)
        // list.style.marginTop = '10px'
        el.className = 'marker';

        var _this = this
        // make a marker for each feature and add to the map

        new mapboxgl.Marker(el)
          .setLngLat([marker.longitude, marker.latitude])
          .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
             .setHTML('<h3>' + marker.location)
           )
          .addTo(this.map);
    }
  }

}
