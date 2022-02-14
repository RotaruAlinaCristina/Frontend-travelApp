import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICity } from '../interfaces/icity';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  find(arg0: (x: { id: any; }) => boolean) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = "/server/cities"

  constructor(private http: HttpClient) { }

  getAllCities(): Observable<ICity[]>{
    return this.http.get<ICity[]>(this.apiUrl + '/all');
   
  }
  
  getCityById(id: number): Observable<ICity[]>{
    return this.http.get<ICity[]>(this.apiUrl + id)
  }
}
