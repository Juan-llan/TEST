import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ProfileUsuarioComponent } from './components/profile-usuario/profile-usuario.component';
import { HomerealComponent } from './pages/homereal/homereal.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'registrar-usuario', pathMatch: 'full' },


  { path: 'homereal', component: HomerealComponent },
  { path: 'buscar/:texto', component: BuscarComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },


  { path: 'login', component: LoginComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'verificar-correo', component: VerificarCorreoComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile-usuario', component: ProfileUsuarioComponent },
  { path: '**', redirectTo: '/homereal', pathMatch: 'full' },
  { path: '', redirectTo: '/homereal', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
