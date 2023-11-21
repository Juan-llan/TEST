import { Component } from '@angular/core';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  constructor(private SeriesSvc:SeriesService){
    this.SeriesSvc.getSeries().subscribe(res=>{console.log(res);})
  }
}
