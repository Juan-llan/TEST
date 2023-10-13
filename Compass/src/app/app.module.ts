import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// inicio servicio
import { CargaScriptService } from './carga-script.service';
// fin servicio
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgramasComponent } from './components/programas/programas.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { MasRecientesComponent } from './components/mas-recientes/mas-recientes.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    NavbarComponent,
    DashboardComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    HomeComponent,
    FooterComponent,
    ProgramasComponent,
    PeliculasComponent,
    MasRecientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CargaScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
