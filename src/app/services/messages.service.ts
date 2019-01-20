import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  products: IProduct[] = [];

  add(product: IProduct) {
    if (this.products.some(e => e.name === product.name)) {
      this.products.pop();
    }
    else
      this.products.push(product);
  }

  clear() {
    this.products = [];
  }
}
