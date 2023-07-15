import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalle } from '../model/detalle';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  private apiURl = "http://localhost:8080/detalles_Pago";
  constructor(private httpClient :HttpClient) { }

  registrarDetalle(detalle:Detalle):Observable<Object>{
    return this.httpClient.post(`${this.apiURl}`,detalle);
  }
}
