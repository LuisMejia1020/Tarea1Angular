import { Component } from '@angular/core';
import { IMangas } from '../interfaces/IEnlace';
import { IEnlace } from '../interfaces/IEnlace';



@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css']
})
export class MangasComponent {
  DescripcionManga = 'Esta es una aplicacion para leer mangas en linea de Japon'
  enlace: IEnlace = {
    msg: 'bienvenido',
    enlace:'https://www.crunchyroll.com'
  }

  mangas: IMangas[] = [
    {nombre: 'Tower of God',
    nombreCreador: 'SIU',
    emision: true,
    animacion: true,
    explicacion: 'Subir la torre para convertirse en alguien especial ',
    genero: 'fantasia',
    imagen:'mu-app/src/app/images/towerofgod.jpg',
    precio: 9.99},

    {nombre: 'Naruto',
    nombreCreador: 'Kishimoto',
    emision: true,
    animacion: true,
    explicacion: 'trabaja para ser un ninja',
    genero:'fantasia',
    imagen:'towerofgod.jpg',
    precio: 9.99},

    {nombre: 'Jujutsu Kaisen',
    nombreCreador: 'Gege Akutami',
    emision: true,
    animacion: true,
    explicacion: 'vuelvete el mas poderoso ',
    genero:'fantasiq',
    imagen:'towerofgod.jpg',
    precio: 9.99},

  ]

}
