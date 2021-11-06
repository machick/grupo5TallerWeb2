import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoserviceService } from 'src/app/services/productoservice.service';
import { Producto } from 'src/app/models/producto/producto';


@Component({
  selector: 'app-producto-home',
  templateUrl: './producto-home.component.html',
  styleUrls: ['./producto-home.component.css']
})
export class ProductoHomeComponent implements OnInit {
  public productos: Array<Producto> | undefined;

  constructor(private productoservice: ProductoserviceService,
    private router: Router)
    { }

  /*lo que intente hacer es injectar el servicio, que son las primeras
  tres lineas de arriba, luego lo declare en el constructor 'productoservice: ProductoserviceService,'
  para despues agregarlo en el metodo de abajo, y ahi llamar al servicio para pasarlo
  a la vista del componente*/
  ngOnInit(): void {
    this.obtenerProductos();
  }

  public obtenerProductos(){
    return this.productoservice.obtenerTodosLosProductos()
    .then((productosObtenidos) => {
      this.productos = productosObtenidos;
    });
  }
}
