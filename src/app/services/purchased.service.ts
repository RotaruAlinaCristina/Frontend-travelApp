import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpurchasedTour } from '../interfaces/ipurchased-tour';

@Injectable({
  providedIn: 'root'
})
export class PurchasedService {
  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private apiUrl = "/server/purchasedTours"
  constructor(private http: HttpClient) { }

  addPurchased(purchased: IpurchasedTour): Observable<IpurchasedTour>{
    return this.http.post<IpurchasedTour>(this.apiUrl + '/addPurchasedTour', JSON.stringify(purchased), this.httpHeaders );
  }
}
