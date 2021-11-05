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


    public obtenerCarrito(_id:string): Promise<Carrito> {
      return this.http.get(environment.API+'/obtenercarrito/'+_id, {}
      ).toPromise().then((res:any) => {
        return Carrito.serializarCarrito(res);
      })
    }
}
