import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  //{path:'ingreso', loadChildren: () => import('./ingreso/ingreso.module').then(m => IngresoModule)},
  {path:'quienSoy', component:QuienSoyComponent},
  {path:'login', component:LoginComponent},
  // {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
