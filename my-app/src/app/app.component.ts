import { Component } from '@angular/core';
import { IEnlace } from './interfaces/IEnlace';
import { IMangas } from './interfaces/IEnlace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TCG Japan Store';
  descripcion = 'Todo lo que quieras encontrar sobre los ultimos estrenos de japon'
  estrenos = 'cada manga se estrena semanalmente'
  
}


