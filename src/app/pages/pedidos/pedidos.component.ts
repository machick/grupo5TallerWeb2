import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedidoservicio.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  public pedidos: any;
  
  constructor(private pedidoService : PedidoService,
    private router: Router,
    private carritoService : CarritoService) { }

  ngOnInit(): void {
    this.obtenerPedidos();
  }

  public obtenerPedidos(){
    return this.pedidoService.obtenerPedidos()
    .then((pedidos)=>{
      this.pedidos = pedidos;
    })
  }

  public repetirPedido(idPedido: any){
    return this.carritoService.repetirPedido(idPedido)
    .then(() => {
      this.router.navigate(['/checkout'])
    })
  }

}
