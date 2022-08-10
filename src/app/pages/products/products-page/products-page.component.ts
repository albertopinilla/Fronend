import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  users: any;
  p: number = 1;
  total: number = 0;
  carrito: number = 0;

  constructor(private service: ProductsService, private localStore: LocalStorageService) {
    this.carrito = this.localStore.shoppingCart();
  }

  ngOnInit() {
    this.getall();
  }

  getall() {
    this.service.getProducts(this.p)
      .subscribe((response: any) => {
        
        this.users = response.data;
        this.total = response.total;

      });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getall();
  }

  saveData(key: string) {

    this.service.getProduct(key)
      .subscribe((response: any) => {
        localStorage.setItem(key, JSON.stringify(response.product));
      });

    this.carrito = this.localStore.shoppingCart();
  }

}
