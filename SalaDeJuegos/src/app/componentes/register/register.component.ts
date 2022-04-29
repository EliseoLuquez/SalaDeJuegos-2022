import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Usuario } from 'src/app/shared/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = "";
  password: string = "";
  error: any;
  msjError!: string;
  usuario = new Usuario();

  constructor(public router: Router, public ls: LocalStorageService, public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  async onRegister() {
    
    // usuario.email = this.email;
    // usuario.password = this.password;

    // var usuarioAux = this.ls.get("usuario");
    // if (usuarioAux != null) {
    //   if (usuarioAux.email == usuario.email) {
    //     //this.router.navigate(['home']);
    //     this.msjError = "Usuario existente.";
    //     console.log("usuario existente");
    //   }

    // }
    // else {
    //   console.log(this.ls.get("usuario"));
    //   this.ls.set("usuario", usuario);
    //   this.router.navigate(['home']);
    // }

    this.usuario.email = this.email;
      this.usuario.password = this.password;
      await this.authSvc.register(this.usuario);
      if(this.authSvc.msjError != "")
      {
        this.msjError = this.authSvc.msjError;
      }
      else
      {
        this.router.navigate(['home']);
      }
  }
}
