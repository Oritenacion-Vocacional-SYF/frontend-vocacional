import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudiante } from '../model/estudiante';

@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public obtenerEstudiante(dni: String) {
    return this.http.get(`${this.baseUrl}/estudiantes/${dni}`);
  }

  public listarEstudiantes() {
    return this.http.get(`${this.baseUrl}/estudiantes`);
  }

  public agregarEstudiante(estudiante: Estudiante) {
    return this.http.post(`${this.baseUrl}/estudiantes`, estudiante);
  }

  public obtenerEstudianteUsername(usuario: any) {
    return this.http.post(`${this.baseUrl}/estudiantes/username`, usuario);
  }
}
