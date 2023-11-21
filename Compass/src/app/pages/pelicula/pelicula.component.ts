import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieDetails } from 'src/app/interfaces/pelicula.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Cast } from 'src/app/interfaces/credits.interfaces';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula?: MovieDetails;
  cast: Cast[] = [];
  movieData: any; // Objeto para almacenar los datos de la película o serie

  constructor(private peliculasSvc: PeliculasService, private activatedRoute: ActivatedRoute, private router: Router, private config: NgbRatingConfig) {

    config.max = 10;
    config.readonly = true;

  }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    this.peliculasSvc.getPeliculasDetalle(id).subscribe(movie => {
      if (!movie) {
        this.router.navigateByUrl('/');
        return;
      }

      this.pelicula = movie;
    });

    this.peliculasSvc.getCast(id).subscribe(cast => {
      this.cast = cast

    })

  }


}
