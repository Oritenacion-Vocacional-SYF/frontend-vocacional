import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria.listar',
  templateUrl: './categoria.listar.component.html',
  styleUrls: ['./categoria.listar.component.css']
})
export class CategoriaListarComponent implements OnInit{
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe((data:any) => {
      this.categorias = data;
    });
  }
}