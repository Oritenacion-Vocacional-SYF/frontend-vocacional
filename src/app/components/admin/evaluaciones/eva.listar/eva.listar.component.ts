import { Component, OnInit } from '@angular/core';
import { EvaluacionService } from 'src/app/service/evaluacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-eva.listar',
  templateUrl: './eva.listar.component.html',
  styleUrls: ['./eva.listar.component.css']
})
export class EvaListarComponent implements OnInit {

  evaluaciones: any = [];

  constructor(private evaluacionService: EvaluacionService) {}

  ngOnInit(): void {
    this.evaluacionService.listarEvaluaciones().subscribe((data: any) => {
      this.evaluaciones = data;
      console.log(this.evaluaciones);
    });
  }
  
  eliminarEvaluacion(evaluacionId: any){
    swal({
      title: 'Eliminar examen',
      text: '¿Estás seguro de eliminar el examen?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar.',
    }).then((result) => {
       if(result.value){
        this.evaluacionService.eliminarEvaluacion(evaluacionId).subscribe(
          (data) => {
            this.evaluaciones= this.evaluaciones.filter((evaluacion: any) => evaluacion.evaluacionId != evaluacionId)
            swal("Evaluación eliminada.","La evaluación ha sido eliminada con éxito.","success")
          }
        )
       }
    })
  }
}