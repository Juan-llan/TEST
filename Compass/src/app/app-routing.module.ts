import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream

const routes: Routes = [];
=======
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileUsuarioComponent } from './components/profile-usuario/profile-usuario.component';
import { HomerealComponent } from './pages/homereal/homereal.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
<<<<<<< Updated upstream
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
=======
import { PeliculasComponent } from './components/peliculas/peliculas.component';

>>>>>>> Stashed changes


const routes: Routes = [
  //{ path: '', redirectTo: 'registrar-usuario', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'homereal', component: HomerealComponent },
  { path: 'buscar/:texto', component: BuscarComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },

  { path: 'peliculas', component: PeliculasComponent },
<<<<<<< Updated upstream
  { path: 'series', component: SeriesComponent },
=======
>>>>>>> Stashed changes

  { path: 'login', component: LoginComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'verificar-correo', component: VerificarCorreoComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile-usuario', component: ProfileUsuarioComponent },
  { path: '**', redirectTo: '/homereal', pathMatch: 'full' },
  { path: '', redirectTo: '/homereal', pathMatch: 'full' },

];
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
