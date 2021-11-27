import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/models/carrito/carrito';
import { CarritoService } from 'src/app/services/carrito.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrito-offcanvas',
  templateUrl: './carrito-offcanvas.component.html',
  styleUrls: ['./carrito-offcanvas.component.css']
})
export class CarritoOffcanvasComponent implements OnInit {
  public carrito : any;
  public subtotal = 0;
  public fileRoute = environment.API_URL_IMAGE;
  constructor(
    private carritoService : CarritoService
  ) { }

  ngOnInit(): void {
    this.obtenerCarrito();

  }

  public obtenerCarrito(){

    return this.carritoService.obtenerCarrito()
        .then((carritoObtenido) => {
          console.log('se obtuvo carrito');
          this.carrito= carritoObtenido;
          this.calcularPrecio();
        })
        .catch(() => {
          console.log('error obtener carrito');
        });
  }

  public calcularPrecio(){
    this.carrito.items.forEach((item: any) => {
      this.subtotal += item.cantidad * item.producto.precio;
    });
  }

  public cambiarCantidad(idItem: any, operacion: any){
    return this.carritoService.cambiarcantidad(idItem, operacion)
    .then(() => {
      console.log(idItem);
      let indexItem = this.carrito.items.findIndex((item: any) => {
        return  idItem === item._id;
      });
        if(operacion === 'mas'){
            this.carrito.items[indexItem].cantidad += 1;
        }
        if(operacion === 'menos'){
          this.carrito.items[indexItem].cantidad -= 1;
            if(this.carrito.items[indexItem].cantidad === 0){
              this.carrito.items.splice(indexItem, 1);
            }
        }
        if(operacion === 'eliminar'){
          this.carrito.items.splice(indexItem, 1);
        }
        this.subtotal=0;
        this.calcularPrecio();
    });
  }

}
