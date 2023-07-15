import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreguntaService {
  private baseUrl = 'http://localhost:8080/preguntas';

  constructor(private http: HttpClient) {}

  public listarPreguntasEvaluacion(id_evaluacion: any) {
    return this.http.get(`${this.baseUrl}/evaluacion/${id_evaluacion}`);
  }

  public guardarPregunta(pregunta: any) {
    return this.http.post(`${this.baseUrl}`, pregunta);
  }

  public eliminarPregunta(preguntaId: any) {
    return this.http.delete(`${this.baseUrl}/${preguntaId}`);
  }

  public actualizarPregunta(pregunta: any) {
    return this.http.put(`${this.baseUrl}`, pregunta);
  }

  public obtenerPregunta(preguntaId: any) {
    return this.http.get(`${this.baseUrl}/${preguntaId}`);
  }

  public listarPreguntasDeLaEvaluacionParaRendir(evaluacionId: any) {
    return this.http.get(`${this.baseUrl}/evaluacion/all/${evaluacionId}`);
  }

  public evaluarPreguntas(preguntas: any) {
    return this.http.post(`${this.baseUrl}/evaluar`, preguntas);
  }
}
