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
    imagen:'https://m.media-amazon.com/images/M/MV5BZGM4NjE1OWYtNzcwMC00ZGY0LWE4NjEtZTgzYzY4YWU5M2E3XkEyXkFqcGdeQXVyMzI2Mjc1NjQ@._V1_FMjpg_UX1000_.jpg',
    precio: 9.99,
    enlace:'https://www.webtoons.com/en/fantasy/tower-of-god/list?title_no=95&page=1'},

    {nombre: 'Naruto',
    nombreCreador: 'Kishimoto',
    emision: true,
    animacion: true,
    explicacion: 'trabaja para ser un ninja',
    genero:'fantasia',
    imagen:'https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
    precio: 9.99,
    enlace:'https://narutoshippuden.online'},

    {nombre: 'Jujutsu Kaisen',
    nombreCreador: 'Gege Akutami',
    emision: true,
    animacion: true,
    explicacion: 'vuelvete el mas poderoso ',
    genero:'fantasiq',
    imagen:'https://oyster.ignimgs.com/wordpress/stg.ign.com/2021/02/jujutsu-kaisen.jpg',
    precio: 9.99,
    enlace:'https://www.jujustukaisen.com'},

    {nombre: 'One Piece',
    nombreCreador: 'Oda',
    emision: true,
    animacion: true,
    explicacion: 'luffy quiere salir y conocer el mundo para convertirse en el Rey de los Piratas',
    genero:'Fantasia',
    imagen:'https://occ-0-41-3933.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQhjYoqXrAWkKlREh6UPuZn7gecckI33LLRzbt2ptacSD19smeXAzzNOtL2BXpOmDmjCWf3wFrSjwob8p50aYpiPS5S4J_yRzrY7.jpg?r=066',
    precio: 9.99,
    enlace:'https://ww3.read-onepiece.net'},

    {nombre: 'Vinland Saga',
    nombreCreador: 'Anonimo',
    emision: true,
    animacion: true,
    explicacion: 'la vida de los vikingos',
    genero:'Fantasia',
    imagen:'https://sportshub.cbsistatic.com/i/2022/06/08/94653059-d16f-4567-b63a-a924c90af88f/vinland-saga-season-2.jpg?auto=webp&width=707&height=1000&crop=0.707:1,smart',
    precio: 9.99,
    enlace:'https://read-vinlandsaga.com'},

    {nombre: 'Record of Ragnarok',
    nombreCreador: 'Anonimo',
    emision: true,
    animacion: true,
    explicacion: 'Los dioses de todas las religiones deciden que el tiempos de los humanos ha acabado y se viene... RAGNAROK',
    genero:'Fantasia',
    imagen:'https://preview.redd.it/5zj753tel6q81.jpg?width=464&format=pjpg&auto=webp&s=836075dc0e8429565a400b362170d4332bb2b088',
    precio: 9.99,
    enlace:'https://record-ragnarok.com'},

  ]

}
