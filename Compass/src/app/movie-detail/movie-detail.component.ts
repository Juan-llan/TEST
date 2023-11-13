import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieData: any; // Objeto para almacenar los datos de la película o serie

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Llamar a la API de TMDb para obtener datos de una película o serie específica
    this.http.get('https://api.themoviedb.org/3/movie/95057?api_key=264434b9906c0733bfb49110e3a3e156')
      .subscribe(data => {
        this.movieData = data;
      });
  }
}
