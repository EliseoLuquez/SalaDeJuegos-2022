import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { FlechasComponent } from './flechas/flechas.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';

const routes: Routes = [
  {path: 'mayormenor', component: MayormenorComponent},
  {path: 'ahorcado', component: AhorcadoComponent},
  {path: 'preguntados', component: PreguntadosComponent},
  {path: 'flechas', component: FlechasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
