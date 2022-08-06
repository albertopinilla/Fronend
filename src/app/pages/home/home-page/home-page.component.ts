import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  products: any;
  p: number = 1;
  total: number = 0;

  carrito: number = 0;
  constructor(private service: ProductsService, private localStore: LocalStorageService) {
    this.carrito = this.localStore.numero();
  }

  ngOnInit() {
    this.getAll();
    
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll() {
    
    this.service.getProducts(this.p)
      .subscribe((response: any) => {
        
        this.products = response.data;
        this.total = response.total;
        console.log(this.products)
      });
      
    
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  pageChangeEvent(event: number) {
    this.p = event;
    this.getAll();
  }

  saveData(key:string) {
    
    this.service.getProduct(key)
    .subscribe((response: any) => {
      //product = response.product;
      localStorage.setItem(key, JSON.stringify(response.product));
    });
    //console.log(this.service.getProduct(key))
    //
    this.carrito = this.localStore.numero();
  }

}
