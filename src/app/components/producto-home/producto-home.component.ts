import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoserviceService } from 'src/app/services/productoservice.service';
import { Producto } from 'src/app/models/producto/producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-producto-home',
  templateUrl: './producto-home.component.html',
  styleUrls: ['./producto-home.component.css']
})
export class ProductoHomeComponent implements OnInit {
  public productos: Array<Producto> | undefined;
  public fileRoute = environment.API_URL_IMAGE;
  public nombre = '';
  public admin:any;
  constructor(private productoservice: ProductoserviceService,
    private carritoService: CarritoService,
    private loginService: LoginService,
    private router: Router)
    { }

  /*lo que intente hacer es injectar el servicio, que son las primeras
  tres lineas de arriba, luego lo declare en el constructor 'productoservice: ProductoserviceService,'
  para despues agregarlo en el metodo de abajo, y ahi llamar al servicio para pasarlo
  a la vista del componente*/
  ngOnInit(): void {
    console.log(this.loginService.decodeMyToken());
    (this.loginService.decodeMyToken().userRol ==='admin')  ? this.admin = true : this.admin = false;
    this.obtenerProductos();
  }

  public obtenerProductos(){
    return this.productoservice.obtenerTodosLosProductos()
    .then((productosObtenidos) => {
      this.productos = productosObtenidos;
      console.log(this.productos);
    });
  }
  public agregarACarrito(idProducto: any){
    return this.carritoService.agregarACarrito(idProducto)
    .then(() => {
      window.location.reload();
    });
  }

  public filtrarProductos()
  {
    //aqui llamo al servicio donde filtra por nombre para luego obtener un array de productos que tenga el nombre pedido
    return this.productoservice.filtrarProductoPorNombre(this.nombre).then((productosObtenidos)=>
    {this.productos = productosObtenidos;}).then(()=> {
      //window.location.reload();
    });
  }
}
