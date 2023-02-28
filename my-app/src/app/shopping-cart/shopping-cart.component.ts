import { Component } from '@angular/core';
import { MangasComponent } from '../mangas/mangas.component';
interface CarritoItem {
  producto: string;
  precio: number;
  cantidad: number;
  subtotal: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent {
  cart: CarritoItem[] = [
    { producto: "Camiseta", precio: 20, cantidad: 1, subtotal: 20 },
    { producto: "Pantalón", precio: 40, cantidad: 2, subtotal: 80 },
    { producto: "Zapatos", precio: 50, cantidad: 1, subtotal: 50 }
  ];

  public actualizarSubtotal(item: CarritoItem) {
    item.subtotal = item.precio * item.cantidad;
  }

  public eliminarItem(item: CarritoItem) {
    const index = this.cart.indexOf(item);
    this.cart.splice(index, 1);
  }

  public total(): number {
    let total = 0;
    this.cart.forEach(item => {
      total += item.subtotal;
    });
    return total;
  }
}
  


