import { Component, OnInit, HostListener, OnDestroy, NgModule } from '@angular/core';
import { Movie } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { PeliculasPosterGridComponent } from 'src/app/shared/peliculas-poster-grid/peliculas-poster-grid.component';



@Component({
  selector: 'app-homereal',
  templateUrl: './homereal.component.html',
  styleUrls: ['./homereal.component.css']
})
export class HomerealComponent implements OnInit {
 
  movies:Movie[] = [];
  moviesSlideShow:Movie[] = [];
  @HostListener('window:scroll',['$event'])
  onScroll(){
    //console.log('hola')

    const pos = (document.documentElement.scrollTop || document.body.scrollTop)*1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    
    if (pos > max) {
      if (this.peliculasSvc.cargando) {return;}
      this.peliculasSvc.getPeliculas().subscribe(movies=>{

        this.movies.push(...movies);


      })
    }
    
    //console.log({pos, max})

  }

  constructor(private peliculasSvc:PeliculasService){




  }


  ngOnInit(): void {
    
    this.peliculasSvc.getPeliculas().subscribe(movies=>{
        
      this.movies = movies;
      this.moviesSlideShow = movies;
    })
  }

  ngOnDestroy(){
    //this.peliculasSvc.resetPeliculaPage();
  }

}
