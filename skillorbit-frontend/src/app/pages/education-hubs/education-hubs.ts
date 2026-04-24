import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-education-hubs',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './education-hubs.html',
  styleUrls: ['./education-hubs.scss']
})
export class EducationHubs implements AfterViewInit {
  private map: L.Map | undefined;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
        center: [ 20.5937, 78.9629 ], // Coordinates for India
        zoom: 5
    });

    // Dark premium tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors © CARTO'
    }).addTo(this.map);

    this.loadGeoJSON();
  }

  private loadGeoJSON(): void {
    // using the india.geojson passed inside public directory
    this.http.get('/india.geojson').subscribe((res: any) => {
      if (this.map) {
        L.geoJSON(res, {
            style: {
                color: '#8b5cf6', // purple 500
                weight: 1,
                fillColor: '#6366f1', // indigo 500
                fillOpacity: 0.15
            }
        }).addTo(this.map);
      }
    });
  }
}
