import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private themeService: ThemeService) {
    this.changeTheme(this.themeService.getTheme());
  }

  ngOnInit(): void {
  }

  changeTheme(name: string): void {
    this.themeService.setTheme(name);
  }
}
