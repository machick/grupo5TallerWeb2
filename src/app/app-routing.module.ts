import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeUnloggedComponent } from './pages/home-unlogged/home-unlogged.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    component: HomeUnloggedComponent,
    path: '',
  },
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    component : CheckoutComponent,
    path: 'checkout',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
