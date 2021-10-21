import { Producto } from '../producto/producto';

export class Carrito {
  constructor(
    public products?: [
      {
        _id: string;
        product: Producto;
        quantity: number;
        precioTotalPorProducto: number;
      }
    ],
    public estado?: boolean,
    public precioTotalCompra?: number,
    public fechaCompra?: Date
  ) {}
}
