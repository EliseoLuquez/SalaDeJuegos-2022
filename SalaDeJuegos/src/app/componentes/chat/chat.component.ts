import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat-service.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ChatMensaje } from 'src/app/shared/chat-mensaje';
import { Usuario } from 'src/app/shared/usuario';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

 
  msjUsuario!: any;
  mensajes!: AngularFireList<ChatMensaje>;
  msjs: any;
  lsUsuarioEmail!: any;
  usuarioActual: boolean = false;
  mail!: string;
  //public usuario$: Observable<any> = this.authSvc.afAuth.user;
  usuario!: any;
  userMail!: string;
  constructor(public afAuth: AuthService, private chatSvc: ChatService, public router: Router, ls: LocalStorageService, public authSvc: AuthService) {
    // let usuarioEmailLS = ls.get('UserMail');
    // this.lsUsuarioEmail = usuarioEmailLS?.toString();
    //this.lsUsuarioEmail = ls.get('UserMail');
    //this.usuario$.pipe((user: any) => this.usuario = user);
    var usuario = this.authSvc.getUserLogged();
    console.log(this.userMail);
    //this.userMail = usuario['email'];
   }

  ngOnInit(): void {
    this.getMensajes();
    //this.userMail = this.afAuth.usuario.email.toString();
    // if(this.lsUsuarioEmail.includes(this.userMail)){
    //   this.usuarioActual = true;
    // }
    // console.log(this.lsUsuarioEmail);
    // console.log(this.userMail);
    
  }

  getMensajes() {
    this.chatSvc.getMensajesList().snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe((mensajes: any) => {
      this.msjs = mensajes;
      this.msjs.forEach((element:any) =>{
        // console.log(element.email.toString());
        // this.mail = element.email;
        // console.log(this.mail);
        // if(this.lsUsuarioEmail.includes(element.email)){
        //   element.usrActual = true;
          
        // }
      });
      
      console.log(this.msjs);
      
    });
  }

  enviarMensaje(){
    let msj = new ChatMensaje();
    msj.mensaje = this.msjUsuario;
    msj.fecha = new Date().toLocaleString();
    //msj.email = this.afAuth.usuario.email;
    msj.usrActual = false;
    this.chatSvc.addMensaje(msj);
    this.msjUsuario = "";
  }
}
