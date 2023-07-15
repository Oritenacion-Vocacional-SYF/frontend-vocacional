import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/service/pregunta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-eva.agregar.pregunta',
  templateUrl: './eva.agregar.pregunta.component.html',
  styleUrls: ['./eva.agregar.pregunta.component.css']
})
export class EvaAgregarPreguntaComponent implements OnInit{

  evaluacionId: any
  titulo: any
  pregunta: any= {
    evaluacion: {},
    contenido: "",
    opcion1: "",
    opcion2: "",
    opcion3: "",
    opcion4: "",
    respuesta: ""
  }

  constructor(private route: ActivatedRoute, private preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.evaluacionId= this.route.snapshot.params["evaluacionId"]
    this.titulo= this.route.snapshot.params["titulo"]
    this.pregunta.evaluacion["id_evaluacion"]= this.evaluacionId
  }

  formSubmit(){
    if(this.pregunta.contenido.trim() == "" || this.pregunta.contenido == null){
      return 
    }
    if(this.pregunta.opcion1.trim() == "" || this.pregunta.opcion1 == null){
      return 
    }
    if(this.pregunta.opcion2.trim() == "" || this.pregunta.opcion2 == null){
      return 
    }
    if(this.pregunta.opcion3.trim() == "" || this.pregunta.opcion3 == null){
      return 
    }
    if(this.pregunta.opcion4.trim() == "" || this.pregunta.opcion4 == null){
      return 
    }
    if(this.pregunta.respuesta.trim() == "" || this.pregunta.respuesta == null){
      return 
    }

console.log(this.pregunta);


    this.preguntaService.guardarPregunta(this.pregunta).subscribe(
      (data) => {
        swal('Pregunta registrada.',`La pregunta ha sido registrada con éxito.`,`success`);
        this.pregunta.contenido= ""
        this.pregunta.opcion1= ""
        this.pregunta.opcion2= ""
        this.pregunta.opcion3= ""
        this.pregunta.opcion4= ""
        this.pregunta.respuesta= ""
      }
    )
  }
}
