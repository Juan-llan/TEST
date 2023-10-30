import { Component, OnInit, HostListener } from '@angular/core';
import { Movie } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-homereal',
  templateUrl: './homereal.component.html',
  styleUrls: ['./homereal.component.css']
})
export class HomerealComponent implements OnInit {
  movies: Movie[] = [];
  moviesSlideShow: Movie[] = [];


  @HostListener('window:scroll', ['$event'])
  onScroll() {


    const pos = (document.documentElement.scrollTop || document.body.scrollTop) * 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    if (pos > max) {
      this.peliculasSvc.getPeliculas().subscribe(movies => {
        this.movies.push(...movies);
      })
    }


  }


  constructor(private peliculasSvc: PeliculasService) { }


  ngOnInit(): void {

    this.peliculasSvc.getPeliculas().subscribe(movies => {
      this.moviesSlideShow = movies;
      this.movies = movies.map(movie => {
        // Calcular el rango de votos
        movie.voterange = this.calcularRangoVotos(movie.vote_average);
        return movie;
      });
    });
  }
  calcularRangoVotos(voteAverage: number): string {
    // Define tus rangos de votos según tus criterios
    if (voteAverage >= 8) {
      return 'Excelente';
    } else if (voteAverage >= 6) {
      return 'Bueno';
    } else {
      return 'Regular';
    }
  }

}
