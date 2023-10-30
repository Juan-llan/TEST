import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Compass';

  constructor(private peliculasSvc: PeliculasService) {
    this.peliculasSvc.getPeliculas().subscribe(res => {
      console.log(res);
    })
  }

}
