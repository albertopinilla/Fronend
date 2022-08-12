import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {

  products: any;
  p: number = 1;
  total: number = 0;

  constructor(private service: ProductsService, private localStore: LocalStorageService) { }

  ngOnInit() {
    this.getAll();
  }

  /**
  * Retorna todos los productos 
  **/
  getAll() {

    this.service.getProducts(this.p)
      .subscribe((response: any) => {

        this.products = response.data;
        this.total = response.total;

      });

  }

  /**
  * Permite paginar los productos
  **/
  pageChangeEvent(event: number) {
    this.p = event;
    this.getAll();
  }

  /**
  * Guarda un producto en el localstorage para hacer un compra 
  **/
  saveData(key: string) {

    this.service.getProduct(key)
      .subscribe((response: any) => {

        sessionStorage.setItem(key, JSON.stringify(response.product));
      });

  }

}
