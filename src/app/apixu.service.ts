import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

    getWeather(location) {
      return this.http.get(
        'http://api.weatherstack.com/current?access_key=4414cdd73f903608e15f954d3cb9a311&query='+location
        );
   }
}
