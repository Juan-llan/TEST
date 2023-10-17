import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {
    switch (code) {
      //El correo existe 
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe '

      //Contraseña debil 
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy debil '

      //Correo invalido 
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'El correo es invalido '

      //La contraseña es incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Contraseña incorrecta'

      //El usuario no existe
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe'

      //Datos no conciden
      case FirebaseCodeErrorEnum.InvalidLoginCredentials:
        return 'Datos no validos'


      default:
        return 'Error desconocido'
    }
  }
}
