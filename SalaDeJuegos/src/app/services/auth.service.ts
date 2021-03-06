import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Usuario } from '../shared/usuario';
import { UsuarioService } from './usuario.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuario: any;
  msjError: string = "";

  constructor(public afAuth: AngularFireAuth, private router: Router, public usuarioSvc: UsuarioService) { }

  async login(email: string, password: string) {

    return await this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
      this.msjError = "";
      if(result.user)
      {
        this.usuario = new Usuario();
        this.usuario.id = result.user?.uid;
        this.usuario.email = result.user?.email;
        console.log(this.usuario);
        
      }

    })
    .catch((res) => {
        console.log(res.code);
        if (res.code == "auth/email-already-in-use") {
          this.msjError = "El email ingresado ya esta en uso."
        }
        if (res.code == "auth/invalid-email") {
          this.msjError = "El formato del email no es correcto."
        }
      });

  }

  //register
  async register(user: Usuario) {

    return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then((result) => {
      this.msjError = "";

      if(result.user){
        this.usuarioSvc.registrarUsuario(result.user, result.user.uid);
      }
    })
      .catch((res) => {
        console.log(res.message);
        if (res.code == "auth/email-already-in-use") {
          this.msjError = "El email ingresado ya esta en uso."
        }
        if (res.code == "auth/invalid-email") {
          this.msjError = "El formato del email no es correcto."
        }
      });
  }
  // // try{
  //   return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
  //   .then((result) =>{

  //     if(result.user)
  //     {
  //       this.usuario.email = user.email;
  //       this.usuario.nombre = user.email;
  //       this.usuario.logueado = true;
  //       this.usuario.fecha = new Date().toLocaleString();

  //       this.usuariosRef.add(
  //         { email: user.email,
  //           fecha: new Date().toLocaleString(),
  //           id: result.user.uid });
  //     }
  //     this.msjError = "";
  //     this.router.navigate(['home']);
  //   })
  //   .catch((res)=>{
  //     this.usuario.logueado = false;
  //     //this.showErrorWithTimeout("No se pudo loguear", "Error", 3000)
  //     if(res.message == "The email address is already in use by another account."){
  //       this.msjError = "El email ingresado ya esta en uso."
  //     }
  //     if(res.message == "The email address is badly formatted."){
  //       this.msjError = "El formato del email no es correcto."
  //     }
  //     // console.log(res);
  //     // this.msjError = res.message;        
  //     //this.router.navigate(['error']);
  //   })


  async getUserLogged() {
    return this.afAuth.onAuthStateChanged(usuario => {
      if(usuario)
      {
        console.log(usuario);
        
      }
    });
  }

  logout() {
    this.afAuth.signOut();
  }


}
