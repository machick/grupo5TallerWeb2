import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninOffcanvasComponent } from './components/signin-offcanvas/signin-offcanvas.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { RegisterValidationComponent } from './components/register-validation/register-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SigninOffcanvasComponent,
    RegisterModalComponent,
    RegisterValidationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
