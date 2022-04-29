import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Usuario } from 'src/app/shared/usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    email!: string;
    public usuario$: Observable<any> = this.authSvc.afAuth.user;

    constructor(public router: Router, public ls: LocalStorageService, public authSvc: AuthService) { }
    async ngOnInit(): Promise<void> {
    }
  
  
    onLogout(){
      this.router.navigate(['home']);
      this.authSvc.logout();
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
    goFlechas(){
      this.router.navigate(['juegos/flechas']);
    }
    goEncuesta(){
      this.router.navigate(['encuesta']);
    }
    goLogin(){
      this.router.navigate(['login']);
    }
    goRegistro(){
      this.router.navigate(['register']);
    }
}
