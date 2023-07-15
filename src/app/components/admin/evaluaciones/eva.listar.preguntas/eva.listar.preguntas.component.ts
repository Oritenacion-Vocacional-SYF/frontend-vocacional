import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/service/pregunta.service';

@Component({
  selector: 'app-eva.listar.preguntas',
  templateUrl: './eva.listar.preguntas.component.html',
  styleUrls: ['./eva.listar.preguntas.component.css']
})
export class EvaListarPreguntasComponent implements OnInit{

  id_evaluacion: any;
  titulo: any
  preguntas:any = [];


  constructor(private route: ActivatedRoute, private preguntaService:PreguntaService){

  }

  ngOnInit(): void {
    this.id_evaluacion = this.route.snapshot.params['id_evaluacion'];
    this.titulo = this.route.snapshot.params['titulo'];
    this.preguntaService.listarPreguntasEvaluacion(this.id_evaluacion).subscribe( (data:any) =>{
      this.preguntas = data;
    });
  }

}