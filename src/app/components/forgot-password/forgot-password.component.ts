import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public email = '';
  public error = false;
  public code = '';
  public password = '';
  public passwordError= '';
  public passwordClass = '';
  public codigoVerificacion = true;
  public cambiarPassword = false;
  public nueva = false;
  public codeError= '';
  public codeClass= '';
  public codigoReenviado = false;
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  public olvideContrasena(){
    return this.loginService.olvidePassword(this.email)
    .then(() => {
      this.codigoVerificacion = false;
      this.cambiarPassword = true;
      this.error = false;
    })
    .catch(() => {
      this.error = true;
    });
  }
  public olvideContrasenaConfirm(){ 
    if(this.isValid()){
    return this.loginService.olvidePasswordConfirmar(this.email, this.code, this.password)
    .then(() => {
      this.error = false;
      this.codigoVerificacion = false;
      this.cambiarPassword = false;
      this.nueva = true;
      setTimeout(function(){
        window.location.reload();
        }, 5000);
    })
    .catch(() => {
      this.error = true;
    });
    }
    else
    {
      return console.log('Error validacion');
    }
  
  }
public isValid(){
  const expresion=/^\d*$/;
  if(!this.code) {
    this.codeError = 'ingrese codigo';
    this.codeClass = 'is-invalid';
    console.log('deberia dar error');
    return false;
  }else if(!expresion.test(this.code)){
    console.log('xczcx');
    this.codeError = 'Nombre no valido';
    this.codeClass = 'is-invalid';
    return false;
  }
  this.codeClass = 'is-valid';

  const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if(!this.password)
  {
    this.passwordError = 'ingrese password ';
    this.codeClass= 'is-invalid';
    console.log('deberia dar erro');
    return false;
  }else if(!passwordReg.test(this.code))
  {
    this.passwordError = 'password no valida';
    this.passwordClass = 'is-invalid';
    return false;
  }
  this.passwordClass= 'is-valid';
  return true;
  
}

  }

  
    

  

  

