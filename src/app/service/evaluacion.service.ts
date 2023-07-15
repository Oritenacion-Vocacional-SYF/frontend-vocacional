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

  registrarEvaluacion(evaluacion: any){
    return this.http.post(`${this.baseUrl}`, evaluacion)
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

  eliminarEvaluacion(evaluacionId: any){
    return this.http.delete(`${this.baseUrl}/${evaluacionId}`)
  }

  modificarEvaluacion(evaluacion: any){
    return this.http.put(`${this.baseUrl}`, evaluacion)
  }
}
