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

  getAll() {

    this.service.getProducts(this.p)
      .subscribe((response: any) => {

        this.products = response.data;
        this.total = response.total;

      });

  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getAll();
  }

  saveData(key: string) {

    this.service.getProduct(key)
      .subscribe((response: any) => {

        sessionStorage.setItem(key, JSON.stringify(response.product));
      });

  }

}
