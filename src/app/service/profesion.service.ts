import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesion } from '../model/profesion';

@Injectable({
  providedIn: 'root'
})
export class ProfesionService {

  private apiURl = "http://localhost:8080/profesiones";
  constructor(private httpClient :HttpClient) { }

  obtenerProfesiones():Observable<Profesion[]>{
    return this.httpClient.get<Profesion[]>(`${this.apiURl}`);
  }

  agregarProfesiones(profesion:Profesion):Observable<Object>{
    return this.httpClient.post(`${this.apiURl}`,profesion);
  }

  buscarProfesion(idProfesion:number):Observable<Profesion>{
    return this.httpClient.get<Profesion>(`${this.apiURl}/${idProfesion}`);
  }

  eliminarProfesion(idProfesion:number):Observable<Object>{
    return this.httpClient.delete(`${this.apiURl}/${idProfesion}`);
  }

  modificarProfesion(profesion:Profesion) : Observable<Object>{
    return this.httpClient.put(`${this.apiURl}`,profesion);
  }
}
