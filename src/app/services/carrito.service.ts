import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrito } from '../models/carrito/carrito';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(
    private http: HttpClient) { }
    public obtenerCarrito(): Promise<Carrito> {
      return this.http.get(environment.API+'/obtenercarrito', {}
      ).toPromise().then((res:any) => {
        return Carrito.serializarCarrito(res);
      })
    }

    public agregarACarrito(idProductoACargar: any){
      return this.http.post(environment.API+'/agregaracarrito', {
        idProducto: idProductoACargar,
        cantidad: 1
      }
      ).toPromise();
    }

    public cambiarcantidad(idItemCambiar: any, operacionCambiar: any) {
      return this.http.post(environment.API+'/cambiarcantidad', {
        idItem: idItemCambiar,
        operacion: operacionCambiar
      }
      ).toPromise();
    }
     public repetirPedido(idPedido: any){
       return this.http.post(environment.API+'/repetirPedido', {
         idPedido: idPedido
       }).toPromise();
     }

}
