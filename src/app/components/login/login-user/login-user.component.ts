import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent {
  usuario: Usuario;
  username: any;
  password: any;

  constructor() {}

  // login() {
  // }
}
