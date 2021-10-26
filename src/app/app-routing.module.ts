import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
