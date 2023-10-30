import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomerealComponent } from './homereal/homereal.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomerealComponent,
    PeliculaComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
