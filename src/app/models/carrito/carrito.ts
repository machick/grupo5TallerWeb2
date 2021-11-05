import { Producto } from '../producto/producto';

export class Carrito {
  constructor(
    public _id: string,
    public products?: [
      {
        _id: string;
        product: Producto;
        quantity: number;
        precioTotalPorProducto: number;
      }
    ]
  ) {}

  public static serializarCarrito(json:any):Carrito{
    return new this(json._id, json.products)
  }
}
