export class Estudiante {
    dni: string;
    nombre: string;
    apellido: string;
    correo: string;
    edad: number;
    fecharegistro: any;
    img: string;
    usuario: any;
  
    constructor(
      dni: string,
      nombre: string,
      apellido: string,
      correo: string,
      edad: number,
      fecharegistro: any,
      img: string,
      usuario: any
    ) {
      this.dni = dni;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.edad = edad;
      this.fecharegistro = fecharegistro;
      this.img = img;
      this.usuario = usuario;
    }
  }
  