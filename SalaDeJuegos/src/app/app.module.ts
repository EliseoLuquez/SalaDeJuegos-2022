import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './componentes/register/register.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QuienSoyComponent,
    NavbarComponent,
    RegisterComponent,
    ChatComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
