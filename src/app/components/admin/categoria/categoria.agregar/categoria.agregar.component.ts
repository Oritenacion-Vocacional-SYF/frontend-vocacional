import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/service/categoria.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-categoria.agregar',
  templateUrl: './categoria.agregar.component.html',
  styleUrls: ['./categoria.agregar.component.css']
})
export class CategoriaAgregarComponent implements OnInit {

  categoria= {
    titulo: "",
    descripcion: ""
  }

  constructor(private categoriaService: CategoriaService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    
  }

  formSubmit(){
    if(this.categoria.titulo.trim() == "" || this.categoria.titulo == null){
      this.snack.open("El título es requerido.","",{
        duration: 3000
      })
      return;
    }

    this.categoriaService.registrarCategoria(this.categoria).subscribe(
      (data: any) => {
        this.categoria.titulo= ""
        this.categoria.descripcion= ""
        swal('Categoría Registrada.',`La categoría ha sido registrada con éxito.`,`success`);
        this.router.navigate(["/admin/categorias"])
      },
      (error) => {
        console.log(error);
        swal("Error.","Error al registrar la categoría.","error")
      }
    )
  }
}
