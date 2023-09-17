import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {}

  addToCart(product: any): void {
    this.cart.push(product);
    this.updateCartStorage();
  }

  removeFromCart(product: any): void {
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.updateCartStorage();
    }
  }

  getCart(): any[] {
    return this.cart;
  }
  removeFromCartById(productId: number): void {
    const index = this.cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.updateCartStorage();
    }
  }

  private updateCartStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }}
