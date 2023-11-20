import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AutmovieService {

  private serverURL: string = 'https://api.themoviedb.org/3';
 
  
  private apiKey = '264434b9906c0733bfb49110e3a3e156';
  private baseURL: string = 'https://api.themoviedb.org/3';
  private loginUrl = 'https://api.themoviedb.org/3/authentication/token/validate_with_login';
  constructor(private http: HttpClient) { 

}


getSesion(): Observable<any> {
  return this.http.get<any>(`${this.serverURL}/authentication/token/new?api_key=264434b9906c0733bfb49110e3a3e156`, {
    
  }).pipe(
    catchError(err => of(null))
  );
}



}
