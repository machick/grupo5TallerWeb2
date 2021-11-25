import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/models/carrito/carrito';
import { CarritoService } from 'src/app/services/carrito.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public carrito : any;
  public subtotal = 0;
  public cantidad = 0;

  

  constructor(
    private carritoService : CarritoService) 
    { }

  ngOnInit(): void {
    this.obtenerCarrito();
  }

  public obtenerCarrito(){

    return this.carritoService.obtenerCarrito()
        .then((carritoObtenido) => {
          this.carrito= carritoObtenido;
          this.calcularPrecio();
        })
        .catch(() => {
          console.log('error obtener carrito');
        });
  }

  public calcularPrecio(){
    this.carrito.items.forEach((item: any) => {
      this.cantidad += item.cantidad;
      this.subtotal += item.cantidad * item.producto.precio;
    });
  }
}
