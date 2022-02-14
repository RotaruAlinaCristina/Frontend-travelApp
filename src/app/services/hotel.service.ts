import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHotel } from '../interfaces/ihotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiUrl = "/server/hotels"

  constructor(private http: HttpClient) { }

  getAllHotels(): Observable<IHotel[]>{
    return this.http.get<IHotel[]>(this.apiUrl + '/all');
  }

  getHotelById(id: number): Observable<IHotel[]>{
    return this.http.get<IHotel[]>(this.apiUrl + id)
  }
}
