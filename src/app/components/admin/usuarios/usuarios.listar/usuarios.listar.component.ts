import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from 'src/app/service/estudiante.service';

@Component({
  selector: 'app-usuarios.listar',
  templateUrl: './usuarios.listar.component.html',
  styleUrls: ['./usuarios.listar.component.css']
})
export class UsuariosListarComponent implements OnInit {
  estudiantes: any;

  constructor(
    private estudianteService: EstudianteService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.obtenerEstudiantes();
  }

  obtenerEstudiantes() {
    this.estudianteService.listarEstudiantes().subscribe((data) => {
      this.estudiantes = data;
    });
  }

  enviarFormulario() {
    this.router.navigate(['admin/usuarios/agregar']);
  }
}