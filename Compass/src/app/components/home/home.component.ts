import { Component } from '@angular/core';
import { CargaScriptService } from '../../carga-script.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private cargaScripts: CargaScriptService) { 
    cargaScripts.Cargar(["main"])
    



    
  }

}
