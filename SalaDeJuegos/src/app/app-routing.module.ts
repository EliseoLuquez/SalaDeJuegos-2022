import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegisterComponent } from './componentes/register/register.component';
import { JuegosModule } from './juegos/juegos.module';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  //{path:'ingreso', loadChildren: () => import('./ingreso/ingreso.module').then(m => IngresoModule)},
  {path:'quienSoy', component:QuienSoyComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'juegos', loadChildren: () => import('./juegos/juegos.module').then(m => JuegosModule)},
  // {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
