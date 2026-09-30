import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class CartComponent {

  @Input() cart: any[] = [];

  @Output() removeFromCart = new EventEmitter<any>();

  removeProduct(product: any) {
    this.removeFromCart.emit(product);
  }

  getTotal() {
    return this.cart.reduce((sum, product) => sum + product.price, 0);
  }
}