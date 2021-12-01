import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public modoSelecccionado:any;
  constructor(private themeService: ThemeService) {
    this.modoSelecccionado = (this.themeService.getTheme() ==='default' )? false: true;
    this.changeTheme(this.themeService.getTheme());
  }

  ngOnInit(): void {
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
