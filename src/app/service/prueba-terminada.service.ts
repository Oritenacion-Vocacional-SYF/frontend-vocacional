import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PruebaTerminadaService {
  private baseUrl = 'http://localhost:8080/pruebas';

  constructor(private http: HttpClient) {}

  registrarPruebaTerminada(PruebaTerminada: any) {
    return this.http.post(`${this.baseUrl}`, PruebaTerminada);
  }
}
