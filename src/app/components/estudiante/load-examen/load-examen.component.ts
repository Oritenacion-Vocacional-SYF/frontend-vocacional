import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvaluacionService } from 'src/app/service/evaluacion.service';

@Component({
  selector: 'app-load-examen',
  templateUrl: './load-examen.component.html',
  styleUrls: ['./load-examen.component.css']
})
export class LoadExamenComponent implements OnInit{
  catId: any
  evaluaciones: any

  constructor(
    private route: ActivatedRoute,
    private evaluacionService: EvaluacionService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.catId= params['catId']

      if(this.catId == 0){
        console.log("Cargando todos los exámenes.");
        this.evaluacionService.obtenerEvaluacionesActivas().subscribe(
          (data) => {
            this.evaluaciones= data
            console.log(this.evaluaciones);
          }, 
          (error) => {
            console.log(error);
          }
        )   
      } else{
        console.log("Cargando un examen en específico.");
        this.evaluacionService.obtenerEvaluacionesActivasDeUnaCategoria(this.catId).subscribe(
          (data: any) => {
            this.evaluaciones= data
            console.log(this.evaluaciones);
          },
          (error) => {
            console.log(error);          
          }
        )
      }
    })
  }
}
