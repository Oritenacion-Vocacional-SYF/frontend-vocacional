import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { LoginService } from 'src/app/service/login.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {
  usuario: any;
  usuario_login: any;
  username: any;
  password: any;

  constructor(
    private usuarioService: UsuarioService,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {}

  login() {
    if (this.username != null && this.password != null) {
      this.usuario_login = { username: this.username, password: this.password };
      this.usuarioService
        .autenticarUsuario(this.usuario_login)
        .subscribe((data: any) => {
          this.usuario = data;
          this.loginService.loginUser(this.usuario);
          console.log(this.loginService.getUsuario());
        });
    }
  }
}
