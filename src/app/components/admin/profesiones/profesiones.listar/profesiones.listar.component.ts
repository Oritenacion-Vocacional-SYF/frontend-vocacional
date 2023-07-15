import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesion } from 'src/app/model/profesion';
import { ProfesionService } from 'src/app/service/profesion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-profesiones.listar',
  templateUrl: './profesiones.listar.component.html',
  styleUrls: ['./profesiones.listar.component.css'],
})
export class ProfesionesListarComponent implements OnInit {
  //Para Listar
  profesiones: Profesion[];
  //Para Buscar
  idProfesion: number;
  objProf: Profesion;
  profesionEncontrada: boolean;

  constructor(
    private profesionServicio: ProfesionService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.obtenerProfesion();
  }

  obtenerProfesion() {
    this.profesionServicio.obtenerProfesiones().subscribe((dato) => {
      this.profesiones = dato;
    });
  }

  buscarProfesion() {
    this.profesionServicio.buscarProfesion(this.idProfesion).subscribe(
      (dato) => {
        this.objProf = dato;
        this.profesionEncontrada = true;
      },
      (error) => {
        console.log('Se produjo un error:', error);
        swal(
          'ID incorrecto',
          `No se encontró la carrera con el ID ${this.idProfesion}`,
          'warning'
        );
        this.profesionEncontrada = false;
      }
    );
  }

  mostrarTabla() {
    this.profesionEncontrada = false;
  }

  eliminarProfesion(idProfesion: number) {
    swal({
      title: '¿Estás seguro?',
      text: 'Debes confirmar si deseas eliminar la Profesión.',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo.',
      cancelButtonText: 'No, cancelar.',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    }).then((result) => {
      if (result.value) {
        this.profesionServicio
          .eliminarProfesion(idProfesion)
          .subscribe((dato) => {
            console.log(dato);
            this.obtenerProfesion();
            this.mostrarTabla();
            swal(
              'Profesión eliminada.',
              'La profesión ha sido eliminada con éxito.',
              'success'
            );
          });
      }
    });
  }

  redirAgregar() {
    this.router.navigate(['/admin/profesiones/agregar']);
  }

  modificarProfesion(objProf: Profesion) {
    this.router.navigate(['/admin/profesiones/modificar', objProf]);
  }
}
