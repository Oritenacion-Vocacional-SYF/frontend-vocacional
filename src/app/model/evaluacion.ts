import { Categoria } from './categoria';

export class Evaluacion {
  id_evaluacion: number;
  titulo: String;
  descripcion: String;
  puntaje_maximo: String;
  nro_preguntas: String;
  activo: boolean;
  categoria: Categoria;

  constructor(
    id_evaluacion: number,
    titulo: string,
    descripcion: string,
    puntaje_maximo: string,
    nro_preguntas: string,
    activo: boolean,
    categoria: Categoria
  ) {
    this.id_evaluacion = id_evaluacion;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.puntaje_maximo = puntaje_maximo;
    this.nro_preguntas = nro_preguntas;
    this.activo = activo;
    this.categoria = categoria;
  }
}