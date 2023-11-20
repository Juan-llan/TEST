import { Component,OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });

    
      
  }


  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }
  buscarPelicula(texto:string){

    texto = texto.trim();

    if (texto.length === 0) {

      return;
      
    }

    this.router.navigate(['/buscar', texto]);

  }  

}
