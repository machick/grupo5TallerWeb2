import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/models/carrito/carrito';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito-offcanvas',
  templateUrl: './carrito-offcanvas.component.html',
  styleUrls: ['./carrito-offcanvas.component.css']
})
export class CarritoOffcanvasComponent implements OnInit {
  public carrito?: Carrito;
  constructor(
    private carritoService : CarritoService
  ) { }

  ngOnInit(): void {
    this.obtenerCarrito();
  }

  public obtenerCarrito(){

    return this.carritoService.obtenerCarrito()
        .then((carritoObtenido) => {
          this.carrito= carritoObtenido;
          
        })
        .catch(() => {
          console.log('error obtener carrito');
        });
  }
}
