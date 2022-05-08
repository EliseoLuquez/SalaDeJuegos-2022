import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mensaje!: string;
  public usuario$: Observable<any> = this.authSvc.afAuth.user;
  
  constructor(public router: Router, public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  goPreguntados() {
    if (this.usuario$) {
      this.router.navigate(['juegos/preguntados']);
    }
    else {
      this.mensaje = "Debes Loguearte!!";
      console.log(this.mensaje);

    }
  }
  goMayorMenor() {
    if (this.usuario$) {
      this.router.navigate(['juegos/mayormenor']);
    }
    else {
      this.mensaje = "Debes Loguearte!!";
      console.log(this.mensaje);

    }
  }
  goAhorcado() {
    if (this.usuario$) {
      this.router.navigate(['juegos/ahorcado']);
    }
    else {
      this.mensaje = "Debes Loguearte!!";
      console.log(this.mensaje);

    }
  }
  goChat() {
    if (this.usuario$) {
      this.router.navigate(['chat']);
    }
    else {
      this.mensaje = "Debes Loguearte!!";
      console.log(this.mensaje);

    }
  }
  goQuienSoy() {
    this.router.navigate(['quienSoy']);
      if(this.usuario$){
      this.router.navigate(['quienSoy']);
    }
    else{
      this.mensaje = "Debes Loguearte!!";
      console.log(this.mensaje);

    }
  }
  goJuegoPropio() {
      if(this.usuario$){
      this.router.navigate(['juegos/flechas']);
    }
    else{
      this.mensaje = "Debes Loguearte!!";
      console.log(this.mensaje);

    }
  }
}
