import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-register-validation',
  templateUrl: './register-validation.component.html',
  styleUrls: ['./register-validation.component.css']
})
export class RegisterValidationComponent implements OnInit {
  public email = '';
  public emailError = '';
  public emailClass = '';
  public password1 = '';
  public password1Error = '';
  public password1Class = '';
  public password2 = '';
  public password2Error = '';
  public password2Class = '';
  public name = '';
  public nameError = '';
  public nameClass = '';
  public lastName = '';
  public lastNameError = '';
  public lastNameClass = '';
  public direction = 'calle falsa 132';
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public register() {
    if(this.isValid()){

      const user = new Usuario(this.email, this.password2, this.name, this.lastName, this.direction);
      return this.loginService.register(user)
      .then(() => {
        console.log('se registro correctamente');
        window.location.reload();
      }).catch((err) => {
        console.log('err register service');
        console.log(err);
      });
    }else{
      return console.log('Error validacion');
    }

  }

  public isValid(){
    const nameReg = /^[a-z ,.'-]+$/i;
    if(!this.name) {
      this.nameError = 'Ingrese nombre';
      this.nameClass = 'is-invalid';
      console.log('qweqwe');
      return false;
    }else if(!nameReg.test(this.name)){
      console.log('xczcx');
      this.nameError = 'Nombre no valido';
      this.nameClass = 'is-invalid';
      return false;
    }
    this.nameClass = 'is-valid';

    const lastNameReg = /^[a-z ,.'-]+$/i;
    if(!this.lastName) {
      this.lastNameError = 'Ingrese apellido';
      this.lastNameClass = 'is-invalid';
      return false;
    }else if(!lastNameReg.test(this.lastName)){
      this.lastNameClass = 'is-invalid';
      this.lastNameError = 'Apellido no valido';
      return false;
    }
    this.lastNameClass = 'is-valid';

    this.email= this.email.toLowerCase();
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(!this.email) {
      this.emailError = 'Ingrese email';
      this.emailClass = 'is-invalid';
      return false;
    }else if(!emailReg.test(this.email)){
      this.emailClass = 'is-invalid';
      this.emailError = 'Email no valido';
      return false;
    }
    this.emailClass = 'is-valid';

    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(!this.password1) {
      this.password1Error = 'Ingrese contraseña';
      this.password1Class = 'is-invalid';
      return false;
    }else if(!passwordReg.test(this.password1)){
      this.password1Class = 'is-invalid';
      this.password1Error = 'Contraseña debe tener minimo 8 caracteres, una mayuscula, una minuscula y un numero';
      return false;
    }
    this.password1Class= 'is-valid';

    if(this.password1 !== this.password2) {
      this.password2Class = 'is-invalid';
      this.password2Error = 'Las contraseñas no coinciden';
      return false;
    }
    this.password2Class= 'is-valid';
    return true;
  }
}
