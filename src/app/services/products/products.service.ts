import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private products = 'http://192.168.0.80/backend/api/v1/products';
  private product = 'http://192.168.0.80/backend/api/v1/products';

  constructor(private httpClient: HttpClient) { }
    
  getProducts(page: number){
    return this.httpClient.get(this.products + '?page=' + page);
    //http://192.168.0.80/backend/api/v1/products?page=1
  }

  getProduct(id:string){
    return this.httpClient.get(this.product + '/' + id);
  }
  
}
