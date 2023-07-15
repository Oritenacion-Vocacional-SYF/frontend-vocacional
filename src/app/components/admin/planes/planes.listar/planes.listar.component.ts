import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-planes.listar',
  templateUrl: './planes.listar.component.html',
  styleUrls: ['./planes.listar.component.css']
})
export class PlanesListarComponent implements OnInit {
  //Para Listar
  planes: Plan[];
  idPlan: number;
  objPlan: Plan;

  constructor(
    private planServicio: PlanService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerPlan();
  }

  obtenerPlan() {
    this.planServicio.obtenerPlanes().subscribe((dato) => {
      this.planes = dato;
    });
  }

  buscarPlan() {
    this.planServicio.buscarPlan(this.idPlan).subscribe(
      (dato) => {
        this.objPlan = dato;
      },
      (error) => {
        console.log('Se produjo un error:', error);
        swal(
          'ID incorrecto',
          `No se encontró el plan con el ID ${this.idPlan}`,
          'warning'
        );
      }
    );
  }

  eliminarPlan(idPlan: number) {
    swal({
      title: '¿Estás seguro?',
      text: 'Debes confirmar si deseas eliminar el Plan.',
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
        this.planServicio
          .eliminarPlan(idPlan)
          .subscribe((dato) => {
            console.log(dato);
            this.obtenerPlan();
            swal(
              'Plan eliminado.',
              'El Plan ha sido eliminado con éxito.',
              'success'
            );
          });
      }
    });
  }

  redirAgregar() {
    this.router.navigate(['/admin/planes/agregar']);
  }

  modificarProfesion(objPlan: Plan) {
    this.router.navigate(['/admin/planes/modificar', objPlan]);
  }
}

