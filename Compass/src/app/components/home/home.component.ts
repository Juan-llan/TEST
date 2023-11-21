import { Component, OnInit } from '@angular/core';
import { CargaScriptService } from '../../carga-script.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private cargaScripts: CargaScriptService, private afAuth: AngularFireAuth, private router: Router) {
    cargaScripts.Cargar(["main"])





  }
  ngOnInit(): void {

  }
  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }
}
