import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void { }

  registrar() {

    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;

    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Puedes redirigir aquí o mostrar un mensaje de éxito.
      })
      .catch((error) => {
        console.error(error);
        // Maneja los errores aquí, por ejemplo, muestra un mensaje de error al usuario.
      });

  }
}