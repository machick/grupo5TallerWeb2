import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-unlogged',
  templateUrl: './home-unlogged.component.html',
  styleUrls: ['./home-unlogged.component.css'],
})
export class HomeUnloggedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('HOla mundo ahre');
  }
}
