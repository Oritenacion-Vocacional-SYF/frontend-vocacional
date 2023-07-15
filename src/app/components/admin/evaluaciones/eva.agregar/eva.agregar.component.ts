import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/service/categoria.service';
import { EvaluacionService } from 'src/app/service/evaluacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-eva.agregar',
  templateUrl: './eva.agregar.component.html',
  styleUrls: ['./eva.agregar.component.css']
})
export class EvaAgregarComponent implements OnInit{

  categorias: any = []

  evaluacionData= {
    titulo: "",
    descripcion: "",
    puntaje_maximo: "",
    nro_preguntas: "",
    activo: true,
    categoria: {
      id_categoria: ""
    }
  }

  constructor(private categoriaService: CategoriaService, private snack: MatSnackBar, private evaluacionService: EvaluacionService, private router: Router) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (data: any) => {
        this.categorias= data
      }
    )
  }

  registrarEvaluacion(){
    if(this.evaluacionData.titulo.trim() == '' || this.evaluacionData.titulo == null){
      this.snack.open("El título es requerido.","",{
        duration: 3000
      })
      return 
    }

    this.evaluacionService.registrarEvaluacion(this.evaluacionData).subscribe(
      (data) => {
        swal('Evaluación registrada.',`La evaluación ha sido registrada con éxito.`,`success`);
        this.evaluacionData= {
          titulo: "",
          descripcion: "",
          puntaje_maximo: "",
          nro_preguntas: "",
          activo: true,
          categoria: {
            id_categoria: ""
          }
        }
        this.router.navigate(["/admin/evaluaciones"])
      }
    )
  }
}
