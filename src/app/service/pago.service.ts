import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pago } from '../model/pago';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  private apiURl = "http://localhost:8080/pagos";
  constructor(private httpClient :HttpClient) { }
  
  registrarPago(pago:Pago):Observable<Object>{
    return this.httpClient.post(`${this.apiURl}`,pago);
  }
}
