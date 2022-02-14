import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ITour } from '../interfaces/itour';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  
  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private apiUrl = "/server/tours"

  constructor(private http: HttpClient) { }

  addTour(tour: ITour): Observable<ITour>{
    return this.http.post<ITour>(this.apiUrl + '/addTour', JSON.stringify(tour), this.httpHeaders );
  }

  getTourPromoted(): Observable<ITour[]>{
    return this.http.get<ITour[]>(this.apiUrl + '/promoted')
  }

  getLastMinuteTour(): Observable<ITour[]>{
    return this.http.get<ITour[]>(this.apiUrl + '/last-minute')
  }

  getSummerTours(): Observable<ITour[]>{
    return this.http.get<ITour[]>(this.apiUrl + '/summer')
  }

  getAllTours(): Observable<ITour[]>{
    return this.http.get<ITour[]>(this.apiUrl + '/all')
  }

  getTours(id: number): Observable<ITour>{
    return this.http.get<ITour>(this.apiUrl + id)
  }

  private baseUrl = 'http://localhost:8080/tours/tour';

  getById(id: number): Observable<ITour> {
    return this.http.get<ITour>(`${this.baseUrl}/${id}`)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  updateTour(tour: ITour): Observable<ITour>{
    return this.http.put<ITour>(this.apiUrl + '/updateTour' , JSON.stringify(tour), this.httpHeaders);
  }

  private baseUrl1 = 'http://localhost:8080/tours/updateTour';

  update(id: number, tour: ITour): Observable<ITour> {
    return this.http.put<ITour>(`${this.baseUrl1}/${id}`, JSON.stringify(tour), this.httpHeaders)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  deleteTour(id: number){
    return this.http.delete<ITour>(this.apiUrl + "/deleteTour/" + id, this.httpHeaders);
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }


  
}
