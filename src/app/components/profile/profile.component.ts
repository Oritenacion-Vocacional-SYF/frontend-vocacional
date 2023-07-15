import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  //user: any = null;
  user= {username: "Gerald",
  password: "man_united",
  rol: "Estudiante"}

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    /*
    this.usuarioService.obtenerUsuarioId('jeanpbv').subscribe((data) => {
      this.user = data;
    });*/
    console.log(this.user);
  }
}
