import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiSimpsonsService } from 'src/app/services/api-simpsons.service';
import { AuthService } from 'src/app/services/auth.service';
import { PuntajeService } from 'src/app/services/puntaje.service';
import { Puntos } from 'src/app/shared/puntos';
import { Usuario } from 'src/app/shared/usuario';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  
  //personajeImg: any;
  personaje!: any;
  rtaCorrecta: boolean = false;
  mensaje!: string;
  arrayPersonajes: any = [];
  empezar: boolean = false;
  img: any;
  puntos!: number;
  puntosAux!: number;
  listaPuntajes: Array<Puntos> = new Array<Puntos>();
  listaOrdenada: Array<Puntos> = new Array<Puntos>();
  usuario: Usuario = new Usuario();
  ordenadas: boolean = false;
  juegoTerminado: boolean = false;
  correcta: boolean = false;
  public usuario$: Observable<any> = this.authService.afAuth.user;


  constructor(private apiSvc: ApiSimpsonsService, public router: Router, public authService: AuthService, public puntajeSvc: PuntajeService) {
    this.puntajeSvc.cargarPuntajesPgts();
    this.usuario$.subscribe((result: any) => {
      this.usuario.email = result['email'];
      this.usuario.id = result['uid']

    });
   }

  ngOnInit(): void {
  }

  async traerPersonaje(){
    this.apiSvc.obtenerPersonaje().subscribe((personaje:any) =>{
      this.personaje = personaje[0];
      this.img = personaje[0].image;
      this.arrayPersonajes.push(personaje[0]);
    },
      (error: any) => {
      console.log(error)}
    );
    this.cargarPersonajes();
  }


  cargarPersonajes(){
    this.arrayPersonajes = [];

    this.apiSvc.obtenerPersonaje().subscribe((personaje:any) =>{
      this.arrayPersonajes.push(personaje[0]);
    },
      (    error: any) => {
      console.log(error)}
    );

    this.apiSvc.obtenerPersonaje().subscribe((personaje:any) =>{
      this.arrayPersonajes.push(personaje[0]);
    },
      (    error: any) => {
      console.log(error)}
    );

    this.apiSvc.obtenerPersonaje().subscribe((personaje:any) =>{
      this.arrayPersonajes.push(personaje[0]);
    },
      (    error: any) => {
      console.log(error)}
    );
    setTimeout(() => {
      //this.validarRepetido(this.personaje.character);
      this.desordenarRespuestas();
      this.ordenadas = true;
    }, 500);
    
  }

  validarRepetido(personajeNombre: string){ 
    let eliminado = false;
    console.log(this.arrayPersonajes);
    for (let index = 0; index < this.arrayPersonajes.length; index++) {
      if(personajeNombre == this.arrayPersonajes[index].character){
        console.log(this.arrayPersonajes[index]);
        this.arrayPersonajes.splice(this.arrayPersonajes[index], 1);
        console.log("personaje eliminado repetido");
        
        eliminado = true;
        console.log(eliminado);
      } 
    }
    //console.log(eliminado);
    if(!eliminado){
      console.log("lista con personaje repetido eliminado");
      console.log(this.arrayPersonajes);
      this.arrayPersonajes.splice(this.arrayPersonajes[0], 1);
    }
    console.log(this.arrayPersonajes);
    this.arrayPersonajes.push(this.personaje)
    console.log("lista de personajes validada");
    console.log(this.arrayPersonajes);
    
  }

  desordenarRespuestas()
  {
    this.arrayPersonajes.sort(function (){return Math.random() - 0.5} );
  }

  correcto(nombre:string){
    if(nombre == this.personaje.character){
      this.rtaCorrecta = true;
      this.mensaje = "Correcto!";
      this.puntos += 10;
      this.puntosAux = this.puntos;
      this.correcta = true;
    }
    else{
      if(this.puntos > 0)
      {
        this.addPuntaje(this.usuario.id, this.usuario.email, this.puntosAux);
      }
      this.mensaje = "Perdiste!";
      this.puntos = 0;
      this.puntosAux = 0;
      this.juegoTerminado = true;
      this.correcta = false;
    }

    this.traerPersonaje();
  }

  async onEmpezar(){
    this.empezar = true;
    this.juegoTerminado = false;
    this.correcta = false;
    this.traerPersonaje();
    this.puntos = 0;
    this.puntosAux = 0;
    this.cargarPuntajes();
    //this.validarRepetido(this.personaje.character);
  }

  cargarPuntajes(){
    this.listaPuntajes = [];
    //console.log(this.listaPuntajes);
    
    this.puntajeSvc.puntajes.subscribe((puntaje:any) =>{
      this.listaPuntajes = puntaje;
      this.listaOrdenada = this.listaPuntajes.slice(0, 10);
      console.log(this.listaPuntajes);
    });
  }

  addPuntaje(usuarioId: string, usuario: string, puntaje: number){
    this.puntajeSvc.addPuntaje(usuarioId, usuario, puntaje, this.puntajeSvc.puntajesCollectionPgts);
  }
}
