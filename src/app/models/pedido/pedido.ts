import { Producto } from '../producto/producto';
export class Pedido {
    constructor(
        public _id?: string,
        public items?: [
          {
            _id?: string;
            producto?: Producto;
            cantidad?: number;
          }
        ],
        public subUsuario?: string,
        public direccion?: string,
        public aclaraciones?: string,
        public total?: number,
        public createdAt?: Date,
        public updatedAt?: Date
      ) {}

      public static serializarPedido(json:any):Pedido{
        let itemsProducts= [];
        itemsProducts = json.items.map((data: { _id: any; product: { _id: string; name: string; description: string; type: string; price: number; imagePath: string }; quantity: any; }) => {
          let itemOne =
            {
              _id: data._id,
              producto: new Producto(data.product._id, data.product.name, data.product.description, data.product.type, data.product.price, data.product.imagePath),
              cantidad: data.quantity
            };
            return itemOne;
        });



        return new this(json._id, itemsProducts, json.subUsuario, json.direccion, json.aclaraciones,json.total, new Date(json.createdAt), new Date(json.updatedAt) );
      }
    }
