import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input() show: boolean | undefined;
  @Input() title: string | undefined;
  @Input() iconLoading = true;
  /* public show =true;
  public title = 'hola';
  public description = 'asdasd';
  public iconLoading = true; */
}
