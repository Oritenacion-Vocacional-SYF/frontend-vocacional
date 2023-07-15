import { Component, OnInit } from '@angular/core';
import { EvaluacionService } from 'src/app/service/evaluacion.service';

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
}