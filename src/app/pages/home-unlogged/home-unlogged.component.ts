import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-unlogged',
  templateUrl: './home-unlogged.component.html',
  styleUrls: ['./home-unlogged.component.css'],
})
export class HomeUnloggedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('token') !== null){
      this.router.navigate(['/home']);
    }
  }
}
