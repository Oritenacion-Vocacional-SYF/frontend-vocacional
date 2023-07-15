import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  categorias: any;

  constructor(
    private categoriaService: CategoriaService,
    private snack: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {

    //this.router.navigate(["estudiante"])

    this.categoriaService.listarCategorias().subscribe(
      (data:any) => {
        this.categorias= data
      }, (error) => {
        this.snack.open("Error al cargar las categorías.",'',{
          duration:3000
        })
        console.log(error);
        
      }
    )
  }
}
