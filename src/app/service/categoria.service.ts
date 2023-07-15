import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = 'http://localhost:8080/categoria';

  constructor(private http: HttpClient) { 
     
  }

  public listarCategorias(){
    return this.http.get(`${this.baseUrl}`);
  }

  


}