export class Usuario {
  username: String;
  password: String;
  rol: any;

  constructor(username: String, password: String, rol:any) {
    this.username = username;
    this.password = password;
    this.rol = rol;
  }
}