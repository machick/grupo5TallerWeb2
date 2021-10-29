import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  public login(emailLogin: string, passwordLogin: string): Promise<any> {
    return this.http.post(environment.API+'/login', {
      email: emailLogin,
      password: passwordLogin,
    })
      .toPromise()
       .then((resp: any) => {
        console.log('resp servcics');
        console.log(resp);
          localStorage.setItem('nombre', resp.nombre);
          localStorage.setItem('apellido', resp.apellido);
          localStorage.setItem('email', resp.email);
          return resp;
      })
      .catch((err) => {
        console.log('err login service');
        console.log(err);
      });
  }

  public register(user: Usuario): Promise<any> {
    return this.http.post(environment.API+'/register', {
          name: user.nombre,
          lastName: user.apellido,
          email: user.email,
          password: user.password,
          direccion: user.direccion
    })
      .toPromise()
      .catch((err) => {
        console.log('err register service');
        console.log(err);
      });;
  }
  public logout():void {
    localStorage.clear();
  }

}
