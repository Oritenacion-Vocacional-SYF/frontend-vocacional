import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

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
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {}

  login() {
    if (this.username != null && this.password != null) {
      this.usuario_login = { username: this.username, password: this.password };
      this.usuarioService
        .autenticarUsuario(this.usuario_login)
        .subscribe((data: any) => {
          this.usuario = data;
          console.log(this.usuario);
          if (this.usuario != null || this.usuario != undefined) {
            this.loginService.loginUser(this.usuario);
            console.log(this.loginService.getUsuario());
            this.redireccionarUsuario();
          } else {
            swal(
              'Error',
              'Error al ingresar, comprueba nombre de usuario o contraseña',
              'error'
            );
          }
        });
    }
  }

  redireccionarUsuario() {
    if (this.usuario.rol.nameRol == 'ADMINISTRADOR') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/estudiante']);
    }
  }
}
