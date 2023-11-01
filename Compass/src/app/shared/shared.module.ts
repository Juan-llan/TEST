import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import {NgbPaginationModule, NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterGridComponent
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterGridComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbPaginationModule,
    NgbRatingModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule {}
