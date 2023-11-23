import { Component, Input } from '@angular/core';
import { Series } from '../../interfaces/series.interfaces';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series-poster-grid',
  templateUrl: './series-poster-grid.component.html',
  styleUrls: ['./series-poster-grid.component.css']
})
export class SeriesPosterGridComponent {
  @Input() Series?: Series[] ;
 
  constructor(config: NgbRatingConfig, private router: Router) {
    // customize default values of ratings used by this component tree
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit() {
   
  }
  
  onMovieClick(Series:Series){


    this.router.navigate(['/series', Series.id])
    

  }
}
