import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public modoSelecccionado:any;
  public admin= false;
  constructor(
    private themeService: ThemeService,
    private loginService: LoginService
    ) {
    this.modoSelecccionado = (this.themeService.getTheme() ==='default' )? false: true;
    this.changeTheme(this.themeService.getTheme());
  }

  ngOnInit(): void {
    (this.loginService.decodeMyToken().userRol === 'admin')? this.admin = true : this.admin = false;
    console.log(this.admin);
    console.log(this.loginService.decodeMyToken());
  }

  changeTheme(name: string): void {
    this.themeService.setTheme(name);
  }
  changeThemeButton(): void {
    console.log(this.modoSelecccionado);
    if(this.modoSelecccionado){
      this.themeService.setTheme('default');
    }else{
      this.themeService.setTheme('dark');
    }
    console.log(this.modoSelecccionado);
    //this.themeService.setTheme();
  }
}
