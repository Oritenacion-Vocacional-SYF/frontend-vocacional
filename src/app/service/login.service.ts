import { Injectable } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public loginUser(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  public isLoggedIn() {
    let usuarioStr = localStorage.getItem('usuario');
    if (usuarioStr == undefined || usuarioStr == '' || usuarioStr == null) {
      return false;
    } else {
      return true;
    }
  }

  public logout() {
    localStorage.removeItem('usuario');
    return true;
  }

  public getUsuario() {
    let userStr = localStorage.getItem('usuario');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  public setUsuario(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  


}
