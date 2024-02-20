import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

interface City {
  name: string;
  lat: string;
  lng: string;
  country: string;
  admin1: string;
  admin2: string;
}

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrl: './debounce.component.scss',
})
export class DebounceComponent {
  private http: HttpClient = inject(HttpClient);

  public cities: Array<City> = [];
  private allCities: Array<City> = [];

  constructor() {
    this.getCities();
  }

  private getCities(): void {
    this.http.get<Array<City>>('assets/cities.json').subscribe({
      next: (result) => {
        this.allCities = result;
      },
    });
  }
}
