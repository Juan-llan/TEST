import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, PeliculasResponse } from '../interfaces/peliculas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private serverURL: string = 'https://api.themoviedb.org/3';
  private peliculasPage = 1;
  private apiKey = '264434b9906c0733bfb49110e3a3e156';

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: '264434b9906c0733bfb49110e3a3e156',
      language: 'es-ES',
      page: this.peliculasPage.toString(),
    }
  }

  getPeliculas(): Observable<Movie[]> {

    return this.http.get<PeliculasResponse>(`${this.serverURL}/movie/now_playing`, { params: this.params }).pipe(
      map((res) => res.results));

  }
}
