import { Component } from '@angular/core';
import { IContacto } from '../interfaces/IEnlace';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
contacto: IContacto =  {
  nombre: 'TCG Japan',
  telefono: +50498787666,
  direccion: 'PLaza las hadas, 2do piso'
}
}
