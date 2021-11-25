import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

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
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ProductoHomeComponent } from './components/producto-home/producto-home.component';
import { environment } from 'src/environments/environment';
import { LoginService } from './services/login.service';
import { AdminOffcanvasComponent } from './components/admin-offcanvas/admin-offcanvas.component';
//import { environment } from 'src/environments/environment';

export function tokenGetter(): string  | null{
  return localStorage.getItem('token');
}
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
    CheckoutComponent,
    ForgotPasswordComponent,
    ProductoHomeComponent,
    AdminOffcanvasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,
    JwtModule.forRoot({
    config: {
      // para jugar con los tokens aunque hay cosas q no tengo claras
      //allowedDomains: environment.API,
      //update: esto es importante ...al parecer es el q le da el permiso para mandar el token a distintas url en 
      allowedDomains: environment.API_WHITELIST, //este caso nuestra api si le puede mandar el token 
      tokenGetter,
    },
  }),
],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
