import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EjemPageComponent } from './pages/ejemPage/ejemPage.component';
import { ProductosHomeComponent } from './pages/productos-home/productos-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EjemPageComponent,
    ProductosHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
