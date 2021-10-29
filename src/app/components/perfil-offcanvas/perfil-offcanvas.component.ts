import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-offcanvas',
  templateUrl: './perfil-offcanvas.component.html',
  styleUrls: ['./perfil-offcanvas.component.css']
})
export class PerfilOffcanvasComponent implements OnInit {
  public name: any;
  public lastName: any;
  public email : any;
  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('nombre');
    this.lastName = localStorage.getItem('apellido');
    this.email = localStorage.getItem('email');
  }

}
