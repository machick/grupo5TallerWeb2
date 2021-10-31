import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-perfil-offcanvas',
  templateUrl: './perfil-offcanvas.component.html',
  styleUrls: ['./perfil-offcanvas.component.css']
})
export class PerfilOffcanvasComponent implements OnInit {
  public name: any;
  public lastName: any;
  public email : any;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {

   this.name =  this.loginService.decodeMyToken().name;
    this.lastName = this.loginService.decodeMyToken().family_name;
    this.email = this.loginService.decodeMyToken().email;
  }

  public logout(){
    this.loginService.logout();
    return this.router.navigate(['/']);


  }
}
