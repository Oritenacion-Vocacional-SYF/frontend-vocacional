import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/service/categoria.service';
import { EvaluacionService } from 'src/app/service/evaluacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-eva.modificar',
  templateUrl: './eva.modificar.component.html',
  styleUrls: ['./eva.modificar.component.css']
})
export class EvaModificarComponent implements OnInit{

  constructor(private route: ActivatedRoute, private evaluacionService: EvaluacionService, private categoriaService: CategoriaService, private router: Router) { }

  evaluacionId= 0
  evaluacion: any
  categorias: any

  ngOnInit(): void {
    this.evaluacionId= this.route.snapshot.params["evaluacionId"]
    this.evaluacionService.obtenerEvaluacion(this.evaluacionId).subscribe(
      (data) => {
        this.evaluacion= data
        console.log(this.evaluacion);
        
      }
    )

    this.categoriaService.listarCategorias().subscribe(
      (data) => {
        this.categorias= data
      }
    )
  }

  modificarDatos(){
    this.evaluacionService.modificarEvaluacion(this.evaluacion).subscribe(
      (data) => {
        swal("Evaluación modificada.","La evaluación ha sido modificada con éxito.","success").then(
          (e) => {
            this.router.navigate(["/admin/evaluaciones"])
          }
        )
      }
    )
  }
}
