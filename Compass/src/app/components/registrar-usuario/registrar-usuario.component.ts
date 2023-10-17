import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toastr: ToastrService
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
    if (password !== repetirPassword) {
      this.toastr.error('Las contraseñas ingresadas deben ser las mismas',
        'Error');
      return;
    }
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.toastr.success('El usuario ya fue registrado con exito!', 'Usuario registrado')
        this.router.navigate(['/login']);
        console.log(userCredential);
        // Puedes redirigir aquí o mostrar un mensaje de éxito.
      })
      .catch((error) => {
        console.error(error);
        this.toastr.error(this.firebaseError(error.code), 'Error')
        // Maneja los errores aquí, por ejemplo, muestra un mensaje de error al usuario.
      });

  }
  firebaseError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe '
      case 'auth/weak-password':
        return 'La contraseña es muy debil '
      case 'auth/invalid-email':
        return 'El correo es invalido '
      default:
        return 'Error desconocido'
    }
  }
}