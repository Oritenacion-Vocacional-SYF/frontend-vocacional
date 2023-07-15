import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluacionService } from 'src/app/service/evaluacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent implements OnInit{
  evaluacionId: any
  evaluacion: any = new Object()


  constructor(
    private evaluacionService: EvaluacionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.evaluacionId = this.route.snapshot.params['evaluacionId']
    this.evaluacionService.obtenerEvaluacion(this.evaluacionId).subscribe(
      (data: any) => {
        this.evaluacion = data
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  empezarEvaluacion(){
    swal({
      title: "¿Quieres comenzar el examen?",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Empezar",
      type: "info"
    }).then((result:any) => {
      if(result.value){
        this.router.navigate([`estudiante/start/${this.evaluacionId}`])
      }
    }
    )
  }
}
