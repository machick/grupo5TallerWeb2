import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register-validation',
  templateUrl: './register-validation.component.html',
  styleUrls: ['./register-validation.component.css']
})
export class RegisterValidationComponent implements OnInit {
  public email : any;
  public password = '123456';
  public name: any;
  public lastName: any;
  public direction = 'calle falsa 132';
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  public register() {
    const user = new Usuario(this.email, this.password, this.name, this.lastName, this.direction);
    this.loginService.register(user)
    .then(() => {
      console.log('se registro correctamente');
    });
  }

}
