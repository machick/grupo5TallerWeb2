import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeUnloggedComponent } from './pages/home-unlogged/home-unlogged.component';
import { HomeComponent } from './pages/home/home.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

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
  },
  {
    component : PedidosComponent,
    path: 'pedidos',
  },
  {
    component : LoaderComponent,
    path: 'loader',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
