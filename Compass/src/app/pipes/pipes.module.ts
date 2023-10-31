import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster.pipes';



@NgModule({
  declarations: [
    PosterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [PosterPipe]
})
export class PipesModule { }