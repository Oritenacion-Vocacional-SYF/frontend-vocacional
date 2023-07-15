import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/service/pregunta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-eva.listar.preguntas',
  templateUrl: './eva.listar.preguntas.component.html',
  styleUrls: ['./eva.listar.preguntas.component.css']
})
export class EvaListarPreguntasComponent implements OnInit{

  id_evaluacion: any;
  titulo: any
  preguntas:any = [];


  constructor(private route: ActivatedRoute, private preguntaService:PreguntaService, private snack: MatSnackBar){

  }

  ngOnInit(): void {
    this.id_evaluacion = this.route.snapshot.params['evaluacionId'];
    this.titulo = this.route.snapshot.params['titulo'];
    this.preguntaService.listarPreguntasDeLaEvaluacionParaRendir(this.id_evaluacion).subscribe( (data:any) =>{
      this.preguntas = data;
      console.log(this.preguntas);
      
    });
  }

  eliminarPregunta(preguntaId: any){
    swal({
      title: 'Eliminar pregunta',
      text: '¿Estás seguro de eliminar la pregunta?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar.',
    }).then(
      (resultado) => {
        if(resultado.value){
          this.preguntaService.eliminarPregunta(preguntaId).subscribe(
            (data) => {
              this.snack.open("Pregunta eliminada","",{
                duration: 3000
              })
              this.preguntas= this.preguntas.filter((pregunta: any) => pregunta.preguntaId != preguntaId)
            }
          )
        }
      }
    )
  }

}