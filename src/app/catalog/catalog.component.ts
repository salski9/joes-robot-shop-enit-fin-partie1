import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './produit.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products : any;
  filter : string = '';
  cart: IProduct[] =[];
  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService
  ) { //aucun code ici
 }

   addToCart(product:IProduct){
    this.cartSvc.add(product);
  }

    getFilteredProducts() {
      return this.filter === ''
        ? this.products
        : this.products.filter((product: any) => product.category === this.filter);
    }
    ngOnInit() {
      this.productSvc.getProducts().subscribe((products) => {
        this.products = products;
      });}
}
