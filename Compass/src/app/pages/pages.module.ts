import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomerealComponent } from './homereal/homereal.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';



@NgModule({
  declarations: [
    HomerealComponent,
    PeliculaComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
