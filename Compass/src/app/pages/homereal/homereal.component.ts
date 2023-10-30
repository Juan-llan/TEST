import { Component, OnInit } from '@angular/core';
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


  constructor(private peliculasSvc: PeliculasService) { }


  ngOnInit(): void {

    this.peliculasSvc.getPeliculas().subscribe(movies => {
      this.moviesSlideShow = movies;
      this.movies = movies;

    })

  }

}
