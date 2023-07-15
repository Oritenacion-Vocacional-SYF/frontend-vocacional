import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntaService } from 'src/app/service/pregunta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-eva.modificar.pregunta',
  templateUrl: './eva.modificar.pregunta.component.html',
  styleUrls: ['./eva.modificar.pregunta.component.css']
})
export class EvaModificarPreguntaComponent implements OnInit{

  preguntaId: any= 0
  pregunta: any
  evaluacion: any

  constructor(private route: ActivatedRoute, private preguntaService: PreguntaService, private router: Router) { }

  ngOnInit(): void {
    this.preguntaId= this.route.snapshot.params["preguntaId"]
    this.preguntaService.obtenerPregunta(this.preguntaId).subscribe(
      (data:any) => {
        this.pregunta= data
      }
    )
  }

  modificarDatosDeLaPregunta(){
    this.preguntaService.actualizarPregunta(this.pregunta).subscribe(
      (data) => {
        swal('Pregunta modificada.',`La pregunta ha sido modificada con éxito.`,`success`).then((e) => {
          this.router.navigate(['/admin/preguntas/'+this.pregunta.evaluacion.id_evaluacion+"/"+this.pregunta.evaluacion.titulo])
        })
      }
    )
  }
}
