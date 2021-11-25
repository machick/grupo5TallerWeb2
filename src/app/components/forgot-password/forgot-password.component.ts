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
  public codigoVerificacion = true;
  public cambiarPassword = false;
  public nueva = false;
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
  }

  public isValid(){
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   
     if(!passwordReg.test(this.password)){
  return false;
    }else
    return true;
    

  }

  


}
