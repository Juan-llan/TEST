import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Series } from '../interfaces/series.interfaces';
import { Cast, Credits } from '../interfaces/credits.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {


  private serverURL: string = 'https://api.themoviedb.org/3';
  private seriesPage = 1;
  cargando = false;
  private apiKey = '0';
  private baseURL: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: '264434b9906c0733bfb49110e3a3e156',
      language: 'es-ES',
      page: this.seriesPage.toString(),
    }
  }

  getSeries(): Observable<Series[]> {

    if (this.cargando) {
      return of([]);

    }
    this.cargando = true;
    console.log('Ver series cargadas');

    return this.http.get<Series>(`${this.serverURL}/movie/now_playing`, { params: this.params }).pipe(
      map((res) => res.series),
      tap(() => {
        this.seriesPage += 1;
        this.cargando = false;
      })
    );

  }
  resetPeliculaPage() {
    this.seriesPage = 1;


  }




  buscarSeries(texto: string): Observable<Series[]> {

    /*   https://api.themoviedb.org/3/search/movie?api_key=13ee2b3b1810d881d34a3d2f4351f448&language=es-ES&page=1&include_adult=false
     */
    const params = { ...this.params, page: 1, query: texto };

    return this.http.get<Series>(`${this.baseURL}/search/TV`, {
      params
    }).pipe(
      map(res => res.series)
    )


  }
  getSeriesDetalle(id: string) {

    return this.http.get<Series>(`${this.serverURL}/TV/${id}`, {
      params: this.params


    }).pipe(
      catchError(err => of(null))
    );


  }
  getCast(id: string): Observable<Cast[]> {

    return this.http.get<Credits>(`${this.baseURL}/TV/${id}/credits`, {
      params: this.params
    }).pipe(
      map(res => res.cast),
      catchError(err => of([]))
    );

  }
}