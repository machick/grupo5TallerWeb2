import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedido/pedido'

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private http: HttpClient) { }

    public agregarPedido(direccionPedido: string, aclaracionesPedido: string, totalPagado: number){
      return this.http.post(environment.API+'/guardarPedido', {
        direccion: direccionPedido,
        aclaraciones: aclaracionesPedido,
        total: totalPagado
      })
      .toPromise()
    }

    public obtenerPedidos() : Promise<Array<Pedido>>{
      return this.http.get(environment.API+'/obtenerPedidos', {
      }).toPromise()
      .then((data: any) => {
        const datos = Array.from(data);
        return datos.map((pedido) => {
          return Pedido.serializarPedido(pedido);
        });
      });
    }


  
}
