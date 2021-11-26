import { Component, OnInit } from '@angular/core';
import { ProductoserviceService } from 'src/app/services/productoservice.service';

@Component({
  selector: 'app-admin-offcanvas',
  templateUrl: './admin-offcanvas.component.html',
  styleUrls: ['./admin-offcanvas.component.css'],
})
export class AdminOffcanvasComponent implements OnInit {
  public newNombre: any;
  public newDescripcion: any;
  public newTipo: any;
  public newPrecio: any;
  constructor(private productoService: ProductoserviceService) {}

  

  constructor() { }

  public agregarProducto() {
    return this.productoService
      .agregarProducto(
        this.newNombre,
        this.newDescripcion,
        this.newTipo,
        this.newPrecio
      )
      .then(() => {
        window.location.reload();
      });
  }
}
