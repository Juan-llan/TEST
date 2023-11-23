import { Component, Input , OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/peliculas.interfaces';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {
  @Input() movies?:Movie[];
 
  constructor(config: NgbRatingConfig, private router: Router) {
    // customize default values of ratings used by this component tree
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit() {
   
  }
  
  onMovieClick(movie:Movie){


    this.router.navigate(['/pelicula', movie.id])
    

  }
}