import {Component} from '@angular/core';
import {Product} from './Entities/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})

export class ProductsPage {
  showProductDescrition(e: MouseEvent) {
    const button: any = e.target;
    const productDescription: any = button.parentNode.querySelector('span.description');

    if (button.classList.contains(`active`)) {
      button.classList.remove(`active`);
      button.innerHTML = '+';
      productDescription.classList.add('hidden');
    } else {
      button.classList.add(`active`);
      button.innerHTML = '-';
      productDescription.classList.remove('hidden');
    }
  }

  addProductInCart(e: MouseEvent) {
    const button: any = e.target;
    const localProductElement = button.parentNode.querySelector('.product');
    const localProduct: Product = new Product();
    const cart = JSON.parse(localStorage.cart);

    localProduct.setId(parseInt(localProductElement.getAttribute('id'), 10))
      .setName(localProductElement.getAttribute('name'))
      .setValue(parseFloat(localProductElement.getAttribute('value')))
      .setQuantity(1);

    const product = cart.filter((item) => item.id === localProduct.getId());
    if (product.length > 0) {
      localProduct.setQuantity(product[0].quantity + localProduct.getQuantity());

      cart.forEach((item, i) => {
        if (item.id === localProduct.getId()) {
          cart[i] = localProduct;
        }
      });
    } else {
      cart.push(localProduct);
    }

    localStorage.cart = JSON.stringify(cart);
  }
}
