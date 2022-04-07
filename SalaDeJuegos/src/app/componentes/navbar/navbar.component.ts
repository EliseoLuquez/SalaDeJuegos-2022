import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    //usuario!: User;
    // logueado: boolean = false;
    // email!: string;
    // usuario: User = new User();
  
    // constructor(public router: Router, public authSvc: AuthService, private ls: LocalStorageService) {
      
    // }
    constructor(public router: Router){}
    ngOnInit(): void {
      // console.log(this.ls.get('usuarioLs'));
      
      // if(this.ls.get('usuarioLs') == null){
      //   this.logueado = false;
      //   this.usuario.logueado = false;;
      // }
      // else{
      //   this.authSvc.logueado = true;
      //   this.logueado = true;
      //   this.usuario = JSON.parse(this.ls.get('usuarioLs'));
        
      // }
      // console.log(this.logueado);


      // this.authSvc.afAuth.authState.subscribe(res=>{
      //   if(res && res.uid){
      //     console.log(res);;
      //     this.logueado = true;
      //     this.usuario.email = res.email || "";
      //     //this.ls.set("usuarioLs", JSON.stringify(this.usuario));
      //     this.email = res.email || "";
      //   }
  
      // });
    }
  
  
    logout(){
      // this.authSvc.onLogout();
      // this.ls.remove("usuarioLs");
      // this.logueado = false;
    }
    goPreguntados(){
      this.router.navigate(['juegos/preguntados']);
    }
    goMayorMenor(){
      this.router.navigate(['juegos/mayormenor']);
    }
    goAhorcado(){
      this.router.navigate(['juegos/ahorcado']);
    }
    goChat(){
      this.router.navigate(['chat']);
    }
    goQuienSoy(){
      this.router.navigate(['quienSoy']);
    }
    goHome(){
      this.router.navigate(['']);
    }
    goJuegoPropio(){
      this.router.navigate(['juegos/juegoPropio']);
    }
    goEncuesta(){
      this.router.navigate(['encuesta']);
    }
    goLogin(){
      this.router.navigate(['login']);
    }
    goRegistro(){
      this.router.navigate(['ingreso/registro']);
    }
}
