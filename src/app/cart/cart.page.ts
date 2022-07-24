import {Component} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  getProducts(): Observable<any> {
    return JSON.parse(localStorage.cart);
  }
}
