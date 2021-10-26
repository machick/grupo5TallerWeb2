import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeUnloggedComponent } from './pages/home-unlogged/home-unlogged.component';
import { NavbarUnloggedComponent } from './components/navbar-unlogged/navbar-unlogged.component';
import { SigninOffcanvasComponent } from './components/signin-offcanvas/signin-offcanvas.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { RegisterValidationComponent } from './components/register-validation/register-validation.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarritoOffcanvasComponent } from './components/carrito-offcanvas/carrito-offcanvas.component';
import { PerfilOffcanvasComponent } from './components/perfil-offcanvas/perfil-offcanvas.component';
import { CarritoOffcanvasItemComponent } from './components/carrito-offcanvas-item/carrito-offcanvas-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeUnloggedComponent,
    NavbarUnloggedComponent,
    SigninOffcanvasComponent,
    RegisterModalComponent,
    RegisterValidationComponent,
    HomeComponent,
    NavbarComponent,
    CarritoOffcanvasComponent,
    PerfilOffcanvasComponent,
    CarritoOffcanvasItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
