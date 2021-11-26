import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { PedidoService } from 'src/app/services/pedidoservicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public carrito : any;
  public subtotal = 0;
  public cantidad = 0;
  public direccion = "";
  public aclaraciones = "";

  

  constructor(
    private carritoService : CarritoService,
    private pedidoService : PedidoService,
    private router: Router) 
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

  public agregarPedido(){
    return this.pedidoService.agregarPedido(this.direccion, this.aclaraciones)
    .then((res) => {
        return this.router.navigate(['/home']);
    })
    .catch((err) => {
      console.log('error al guardar pedido');
    }); 
  }
}
