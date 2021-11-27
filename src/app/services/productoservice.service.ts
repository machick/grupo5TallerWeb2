import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductoserviceService {
  constructor(private http: HttpClient) {}
  public agregarProducto(
    newNombre: any,
    newDescripcion: any,
    newTipo: any,
    newPrecio: number,
    newImagePath: string
  ): any {
    return this.http
      .post(environment.API + '/nuevoproducto', {
        nombre: newNombre,
        descripcion: newDescripcion,
        tipo: newTipo,
        precio: newPrecio,
        imagePath: newImagePath
      })
      .toPromise();
    /*.then((res: Array<any>) => {
    return res.map((producto)) => {
      return Producto.serializarProducto(Producto)};
    })*/
  }
  public obtenerTodosLosProductos(): Promise<Array<Producto>> {
    return this.http
      .get(environment.API + '/home', {})
      .toPromise()
      .then((data: any) => {
        const datos = Array.from(data);
        return datos.map((producto) => {
          return Producto.serializarProducto(producto);
        });
      });
  }

  public filtrarProductoPorNombre(nombreIngresado: string): Promise<Array<Producto>> {
    return this.http
    .post(environment.API + '/Productos', {nombre:nombreIngresado}).toPromise()
    .then((data: any)=>{
      const datos = Array.from(data);
      return datos.map((producto)=>{
        return Producto.serializarProducto(producto);
      });
    });
  }


}
