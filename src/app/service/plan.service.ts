import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from '../model/plan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private apiURl = "http://localhost:8080/planes";
  constructor(private httpClient :HttpClient) { }

  obtenerPlanes():Observable<Plan[]>{
    return this.httpClient.get<Plan[]>(`${this.apiURl}`);
  }

  agregarPlanes(plan:Plan):Observable<Object>{
    return this.httpClient.post(`${this.apiURl}`,plan);
  }

  eliminarPlan(idPlan:number):Observable<Object>{
    return this.httpClient.delete(`${this.apiURl}/${idPlan}`);
  }

  buscarPlan(idPlan:number):Observable<Plan>{
    return this.httpClient.get<Plan>(`${this.apiURl}/${idPlan}`);
  }

  modificarPlan(plan:Plan) : Observable<Object>{
    return this.httpClient.put(`${this.apiURl}`,plan);
  }
}
