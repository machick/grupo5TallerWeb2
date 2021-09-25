import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EjemPageComponent } from './pages/ejemPage/ejemPage.component';

const routes: Routes = [{
    component: HomeComponent,
    path: ''},
    {
      component: EjemPageComponent,
      path: 'ejemplo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
