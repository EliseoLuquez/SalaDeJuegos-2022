import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiSimpsonsService {

  constructor(private http: HttpClient) { }

  public obtenerPersonaje(){
    return this.http.get('https://thesimpsonsquoteapi.glitch.me/quotes');
  }

  public obtenerPersonajes(num: string){
    return this.http.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=' + num);
  }
}
