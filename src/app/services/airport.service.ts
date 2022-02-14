import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAirport } from '../interfaces/iairport';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  
  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private apiUrl = "/server/airports"

  constructor(private http: HttpClient) { }


  getAllAirports(): Observable<IAirport[]>{
    return this.http.get<IAirport[]>(this.apiUrl + '/all');
   
  }

  getAirportById(id: number): Observable<IAirport[]>{
    return this.http.get<IAirport[]>(this.apiUrl + id)
  }

}
