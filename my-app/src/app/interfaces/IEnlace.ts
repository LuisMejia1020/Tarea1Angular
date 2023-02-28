export interface IEnlace {
    msg: string,
    enlace: string 
  }

  export interface IMangas {
    id: number,
    nombre: string,
    nombreCreador: string,
    emision: boolean,
    animacion: boolean,
    explicacion: string,
    genero: string,
    imagen: string,
    precio: number,
    enlace: string
  }

  export interface INoticias {
    titular: string,
    imagen: string,
    msg: string,
    enlace: string
  }

  export interface IContacto {
    nombre: string,
    telefono: number,
    direccion: string
  }

  export interface ICarritoItem {
    producto: string;
    precio: number;
    cantidad: number;
    subtotal: number;
  }

  