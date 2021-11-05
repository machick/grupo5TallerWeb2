export class Producto {
    constructor(
        public codigo_producto: string,
        public nombre:string,
        public descripcion:string,
        public clasificacion:string,
        public precio:number
    ){}

    /*se crea un metodo para serializar el json que recibe desde la api
    este sera devuelto como un objeto tengo entendido*/
    public static serializarProducto(json:any):Producto{
        return new this(json.codigo_producto, json.nombre, json.descripcion, json.clasificacion, json.precio);
      }
}
