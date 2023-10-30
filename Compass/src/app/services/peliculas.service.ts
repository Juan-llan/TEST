import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculasResponse } from '../interfaces/peliculas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiKey = '264434b9906c0733bfb49110e3a3e156';

  constructor(private http: HttpClient) { }

  getPeliculas() {

    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=264434b9906c0733bfb49110e3a3e156&Language=es-ES&page=1');



  }
}
