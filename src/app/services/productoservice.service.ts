import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoserviceService {

  constructor(private http: HttpClient) 
  { }

  
 /* public obtenerTodosLosProductos(): Promise<Array<Producto> {
    return this.http.get(environment.API+'/home')
    .toPromise().then((res: Array<any>) => {
      return res.map((producto)) => {
        return Producto.serializarProducto(Producto)};
      })
   */   

      public obtenerTodosLosProductos(): Promise<Array<Producto>>{
        return this.http.get(environment.API+'/home').toPromise()
        .then((p: Array<any>)=>{
          return p.map((producto)=>{
            return Producto.serializarProducto(producto);
          });
        });


      }
    
  



}
