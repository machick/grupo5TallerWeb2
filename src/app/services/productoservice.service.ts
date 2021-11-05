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

  
  public obtenerTodosLosProductos(): Promise<any> {
    return this.http.get(environment.API+'/home'
    ).toPromise().then((res:any) => {
      return Producto.serializarProducto(res) ;
    })
  }



}
