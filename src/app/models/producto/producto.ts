export class Producto {
    constructor(
        public _id?: string,
        public nombre?:string,
        public descripcion?:string,
        public clasificacion?:string,
        public precio?: number,
        public imagePath?: string
    ){}

    /*se crea un metodo para serializar el json que recibe desde la api
    este sera devuelto como un objeto tengo entendido*/
    public static serializarProducto(json:any):Producto{
        return new this(json._id, json.name, json.description, json.type, json.price, json.imagePath);
      }
}
