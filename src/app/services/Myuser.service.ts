import { HttpClient, HttpHandler, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, catchError, concat, exhaustMap, map, Observable, of, take, throwError } from 'rxjs';
import { IUser } from '../interfaces/iuser';
import { IToken } from '../interfaces/itoken';
import { Constants } from '../constants';
import { StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'current-user';
export const USER_SERVICE_STORAGE =
    new InjectionToken<StorageService>('USER_SERVICE_STORAGE');
    
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserService {
  getAdminBoard() {
    throw new Error('Method not implemented.');
  }
 
 
  private loggedInUserSubject!: BehaviorSubject<IUser>;
  public loggedInUser$!: Observable<IUser>;


  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'jwt-token',
    'Access-Control-Allow-Origin': '*'

    })
  }

  private apiUrl = "/server/users"
  storage: any;

  constructor(private http: HttpClient) {}


  getAllUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.apiUrl + '/all')
  }

  addUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.apiUrl + '/addUser', JSON.stringify(user), this.httpHeaders );
  }

  private baseUrl = 'http://localhost:8080/users/user';

  getById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/${id}`)
    .pipe(
      catchError(this.errorHandler)
    )
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
