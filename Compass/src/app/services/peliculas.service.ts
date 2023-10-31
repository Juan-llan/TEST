import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie, PeliculasResponse } from '../interfaces/peliculas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  resetPeliculaPage() {
    throw new Error('Method not implemented.');
  }

  private serverURL: string = 'https://api.themoviedb.org/3';
  private peliculasPage = 1;
  cargando = false;
  private apiKey = '264434b9906c0733bfb49110e3a3e156';
  private baseURL: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: '264434b9906c0733bfb49110e3a3e156',
      language: 'es-ES',
      page: this.peliculasPage.toString(),
    }
  }

  getPeliculas(): Observable<Movie[]> {

    if (this.cargando) {
      return of([]);

    }
    this.cargando = true;
    console.log('Ver peliculas cargadas');

    return this.http.get<PeliculasResponse>(`${this.serverURL}/movie/now_playing`, { params: this.params }).pipe(
      map((res) => res.results),
      tap(() => {
        this.peliculasPage += 1;
        this.cargando = false;
      })
    );

  }
  buscarPeliculas(texto: string): Observable<Movie[]> {

    /*   https://api.themoviedb.org/3/search/movie?api_key=13ee2b3b1810d881d34a3d2f4351f448&language=es-ES&page=1&include_adult=false
     */
    const params = { ...this.params, page: 1, query: texto };

    return this.http.get<PeliculasResponse>(`${this.baseURL}/search/movie`, {
      params
    }).pipe(
      map(res => res.results)
    )


  }

}
