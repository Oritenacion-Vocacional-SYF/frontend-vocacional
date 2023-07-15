import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {

  private baseUrl = 'http://localhost:8080/evaluaciones';

  constructor(private http: HttpClient) { 

  }

  listarEvaluaciones(){
    return this.http.get(`${this.baseUrl}`)
  }

  obtenerEvaluacion(evaluacionId: any){
    return this.http.get(`${this.baseUrl}/${evaluacionId}`)
  }

  listarEvaluacionesDeUnaCategoria(categoriaId: any){
    return this.http.get(`${this.baseUrl}/categoria/${categoriaId}`)
  }

  obtenerEvaluacionesActivas(){
    return this.http.get(`${this.baseUrl}/activo`)
  }

  obtenerEvaluacionesActivasDeUnaCategoria(categoriaId: any){
    return this.http.get(`${this.baseUrl}/categoria/activo/${categoriaId}`)
  }
}
