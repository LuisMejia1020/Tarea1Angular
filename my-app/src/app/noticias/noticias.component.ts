import { Component } from '@angular/core';
import { INoticias } from '../interfaces/IEnlace';
import { IEnlace } from '../interfaces/IEnlace';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  DescripcionManga = 'Esta es una aplicacion para leer mangas en linea de Japon'
  enlace: IEnlace = {
    msg: 'bienvenido',
    enlace:'https://www.crunchyroll.com'
  }

  noticias: INoticias[] = [
    {titular: 'Tower of God termina su paro',
    msg:'Despues que su autor decidiera poner en pausa Tower of God, este regresa con 6 tomos nuevos para continuar la historia',
    enlace:'https://animecorner.me/tower-of-god-webtoon-ends-hiatus-with-episode-134-of-third-season/',
    imagen:'https://animecorner.me/wp-content/uploads/2023/02/tog.jpg?ezimgfmt=rs%3Adevice%2Frscb21-1'
    },

    {titular: 'Se viene el arco animado de Sasuke',
    msg:'la historia de Sasuke llega al anime de Boruto',
    enlace:'https://larepublica.pe/animes/2022/12/15/adios-boruto-sasuke-retsuden-sera-anime-de-que-trata-quienes-aparecen-y-cuando-se-estrena',
    imagen:'https://imgmedia.larepublica.pe/640x377/larepublica/migration/images/AP2I4Q4C65ARJHFIFII7VXRY4U.webp'
    },

    {titular: 'El arco de Dark Deku esta aca',
    msg:'Deku deja la academia de heroes y comienza su nueva etapa como un vigilante en busca de all for one',
    enlace:'https://tierragamer.com/noticias/anime/my-hero-academia-revela-el-nombre-oficial-del-arco-de-dark-deku/',
    imagen:'https://tierragamer.com/wp-content/uploads/2023/02/My-Hero-Academia-Dark.jpg.webp'
    },

    {titular: 'La segunda parte de Record of Ragnarok pronto en Netflix',
    msg:'la parte final de la temporada 2 de Record of Ragnarok llegara muy pronto a netflix para que puedas disfrutar la continuacion de la batalla entre la humanidad y los dioses',
    enlace:'https://www.dexerto.com/tv-movies/when-is-record-of-ragnarok-season-2-part-2-on-netflix-2043955/',
    imagen:'https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2023%2F01%2F26%2Frecord-of-ragnarok-season-2-part-2.jpg&w=640&q=75'
    },

    {titular: 'Jujutsu Kaisen regresa',
    msg:'Se confirma que season 2 de jujutsu kaisen estrenara en julio 2023, incluira los arcos de Hidden inventory y el incidente de Shibuya',
    enlace:'https://www.digitalspy.com/tv/a39850816/jujutsu-kaisen-season-2-release-date-crunchyroll/',
    imagen:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jujutsu-kaisen-0-1647000119.jpg?crop=0.350xw:0.834xh;0.409xw,0&resize=768:*'
    },

    {titular: 'Ya esta aca Vinland Saga',
    msg:'Season 2 de vinland saga ya esta aca',
    enlace:'https://www.devdiscourse.com/article/entertainment/2314570-vinland-saga-season-2-release-dates-time-episode-guide-recap',
    imagen:'https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/25_02_2022_14_59_53_3780957.jpg?width=920&format=webp'
    },


  ]

}

