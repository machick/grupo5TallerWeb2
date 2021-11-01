import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
  ) { }

  public login(emailLogin: string, passwordLogin: string): Promise<any> {
    return this.http.post(environment.API+'/login', {
      email: emailLogin,
      password: passwordLogin,
    })
      .toPromise()
       .then((resp: any) => {
          localStorage.setItem('token', resp.idToken);
          return resp.idToken;
      });
  }

  public decodeMyToken(): any {
    const token = this.getToken();
    if (!token) {
      throw new Error('empty token');
    }
    return this.jwtHelper.decodeToken(token);
  }

  public getToken(): any {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return token;
  }
  public register(user: Usuario): Promise<any> {
    return this.http.post(environment.API+'/register', {
          name: user.nombre,
          lastName: user.apellido,
          email: user.email,
          password: user.password,
          direccion: user.direccion
    })
      .toPromise();

  }
  public logout():void {
    localStorage.clear();
  }

  public reenviarCodigo(emailResend: string): Promise<any> {
    return this.http.post(environment.API+'/resendConfirmCode', {
      email: emailResend
    }).toPromise()
    .then(()=> {
      console.log('codigo reenviado');
    })
    .catch(() => {
      console.log('error reenviar codigo');
    });
  }
  public verificarEmail(emailCheck: string, codeCheck: string): Promise<any> {
    return this.http.post(environment.API+'/check', {
          email: emailCheck,
          code: codeCheck
    }).toPromise();
  }
  public olvidePassword(emailResend: string): Promise<any> {
    return this.http.post(environment.API+'/forgotPassword', {
      email: emailResend
    }).toPromise();
  }
  public olvidePasswordConfirmar(emailResend: string, codeCheck: string, newPassword: string): Promise<any> {
    return this.http.post(environment.API+'/forgotPassword/confirm', {
      email: emailResend,
      code: codeCheck,
      password: newPassword
    }).toPromise();
  }

}
