export class Categoria{
    id_categoria:number;
    descripcion:String;
    titulo: String;

    constructor(id_categoria:number, descripcion:String, titulo: String){
        this.id_categoria = id_categoria;
        this.descripcion = descripcion;
        this.titulo = titulo;
    }

}