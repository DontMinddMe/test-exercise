import { Component } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'text-exercise';
  cities = ['Тюмень', 'Екатеринбург', 'Москва', 'Санкт-Петербург', 'Новосибирск', 'Владивосток ']
  activeCityIndex = 0
  coordinates: [number, number][] = [
    [57.1553, 65.5619],
    [56.8431, 60.6454],
    [55.7558, 37.6173],
    [59.9343, 30.3351],
    [54.9833, 82.8964],
    [43.1332, 131.9113]
  ]
  private map: Leaflet.Map;
  private centroid: Leaflet.LatLngExpression = this.coordinates[this.activeCityIndex];

  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 3,
        maxZoom: 17,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 8,
    center: this.centroid
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
  }

  onClick(i: number) {
    this.activeCityIndex = i
    this.map.flyTo(this.coordinates[this.activeCityIndex], 8)
  }

}
