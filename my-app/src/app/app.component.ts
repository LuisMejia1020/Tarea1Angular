import { Component } from '@angular/core';
import { IEnlace } from './interfaces/IEnlace';
import { IMangas } from './interfaces/IEnlace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MangasJaponeses';
  descripcion = 'Esta es una aplicacion para leer mangas en linea de Japon'
  estrenos = 'cada manga se estrena semanalmente'
  noticias = 'Tower of god regresa'
  colores: string[] = []
  enlace: IEnlace = {
    msg: 'bienvenido',
    enlace:'https://www.google.com'
  }

  mangas: IMangas[] = [
    {nombre: 'Tower of God',
    nombreCreador: 'SIU',
    emision: true,
    animacion: true,
    descripcion: 'Subir la torre para convertirse en alguien especial '},

    {nombre: 'Naruto',
    nombreCreador: 'Kishimoto',
    emision: true,
    animacion: true,
    descripcion: 'trabaja para ser un ninja'},

    {nombre: 'Jujutsu Kaisen',
    nombreCreador: 'Gege Akutami',
    emision: true,
    animacion: true,
    descripcion: 'vuelvete el mas poderoso '},

  ]

  
  

  constructor(){
    this.colores.push('rojo')
    this.colores.push('verde')
    this.colores.push('blanco')
  }

}


