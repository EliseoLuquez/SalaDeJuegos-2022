import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { FormsModule } from '@angular/forms';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { FlechasComponent } from './flechas/flechas.component';


@NgModule({
  declarations: [
    AhorcadoComponent,
    MayormenorComponent,
    PreguntadosComponent,
    FlechasComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule
  ]
})
export class JuegosModule { }
