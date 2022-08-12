import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathRest } from 'src/app/static/path-rest';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
  constructor(private httpClient: HttpClient) { }

  private products = PathRest.GET_PRODUCTS;
  private product = PathRest.GET_PRODUCT;

  /**
  * Retorna todos los productos 
  **/
  getProducts(page: number) {
    return this.httpClient.get(this.products + '?page=' + page);

  }

  /**
  * Retorna un producto 
  **/
  getProduct(id: string) {

    return this.httpClient.get(this.product + '/' + id);
  }

  /**
  * Elimina un producto 
  **/
  deleteProduct(id: number) {
    return this.httpClient.delete(this.product + '/' + id);
  }

}
