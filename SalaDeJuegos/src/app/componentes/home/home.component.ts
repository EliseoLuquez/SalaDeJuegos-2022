import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mensaje!: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goPreguntados() {
    // if (this.authSvc.logueado) {
    //   this.router.navigate(['juegos/preguntados']);
    // }
    // else {
    //   this.mensaje = "Debes Loguearte!!";
    //   console.log(this.mensaje);

    // }
  }
  goMayorMenor() {
    // if (this.authSvc.logueado) {
    //   this.router.navigate(['juegos/mayormenor']);
    // }
    // else {
    //   this.mensaje = "Debes Loguearte!!";
    //   console.log(this.mensaje);

    // }
  }
  goAhorcado() {
    // if (this.authSvc.logueado) {
    //   this.router.navigate(['juegos/ahorcado']);
    // }
    // else {
    //   this.mensaje = "Debes Loguearte!!";
    //   console.log(this.mensaje);

    // }
  }
  goChat() {
    // if (this.authSvc.logueado) {
    //   this.router.navigate(['chat']);
    // }
    // else {
    //   this.mensaje = "Debes Loguearte!!";
    //   console.log(this.mensaje);

    // }
  }
  goQuienSoy() {
    this.router.navigate(['quienSoy']);
    //   if(this.authSvc.logueado){
    //   this.router.navigate(['quienSoy']);
    // }
    // else{
    //   this.mensaje = "Debes Loguearte!!";
    //   console.log(this.mensaje);

    // }
  }
  goJuegoPropio() {
    //   if(this.authSvc.logueado){
    //   this.router.navigate(['juegos/juegoPropio']);
    // }
    // else{
    //   this.mensaje = "Debes Loguearte!!";
    //   console.log(this.mensaje);

    // }
  }
}
