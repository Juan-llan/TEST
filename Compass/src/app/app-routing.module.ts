import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProgramasComponent } from './components/programas/programas.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { MasRecientesComponent } from './components/mas-recientes/mas-recientes.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  {path: 'verificar-correo', component: VerificarCorreoComponent },
  {path: 'recuperar-password', component: RecuperarPasswordComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'programas', component: ProgramasComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'mas-recientes', component: MasRecientesComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
