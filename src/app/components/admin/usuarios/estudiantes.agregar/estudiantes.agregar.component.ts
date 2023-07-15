import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Estudiante } from 'src/app/model/estudiante';

@Component({
  selector: 'app-estudiantes.agregar',
  templateUrl: './estudiantes.agregar.component.html',
  styleUrls: ['./estudiantes.agregar.component.css']
})
export class EstudiantesAgregarComponent implements OnInit {
  usuario: any;
  estudiante: any;

  hide = true;

  constructor(
    private estudianteService: EstudianteService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.estudiante = new Object();
  }

  onSubmit() {
    this.registrarUsuarioEstudiante();
    this.registrarEstudiante();
  }

  registrarEstudiante() {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const dia = fechaActual.getDate().toString().padStart(2, '0');

    let fecha_json = `${año}-${mes}-${dia}`;

    let json_estudiante = new Estudiante(
      this.estudiante.dni,
      this.estudiante.nombre,
      this.estudiante.apellido,
      this.estudiante.correo,
      this.estudiante.edad,
      fecha_json,
      this.estudiante.img,
      { username: this.estudiante.username }
    );

    this.estudianteService
      .agregarEstudiante(json_estudiante)
      .subscribe((data) => {
        console.log(data);
      });
  }
  registrarUsuarioEstudiante() {
    let usuario_estudiante = new Usuario(
      this.estudiante.username,
      this.estudiante.password,
      { nameRol: 'ESTUDIANTE' }
    );
    this.usuarioService
      .agregarUsuarioEstudiante(usuario_estudiante)
      .subscribe((data) => {
        this.usuario = data;
      });
    console.log(this.usuario);
  }
}

