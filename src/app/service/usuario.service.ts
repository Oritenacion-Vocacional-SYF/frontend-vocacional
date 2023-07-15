import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseURL: String = 'http://localhost:8080/usuarios';

  constructor(private HttpClient: HttpClient) {}

  obtenerUsuarioId(id: String): Observable<Object> {
    return this.HttpClient.get<Usuario>(`${this.baseURL}/${id}`);
  }
 
  agregarUsuarioEstudiante(usuario: Usuario) {
    return this.HttpClient.post(`${this.baseURL}`, usuario);
  }
}
