import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathRest } from 'src/app/static/path-rest';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private products = PathRest.GET_PRODUCTS;
  private product = PathRest.GET_PRODUCT;

  constructor(private httpClient: HttpClient) { }
    
  getProducts(page: number){
    return this.httpClient.get(this.products + '?page=' + page);
    
  }

  getProduct(id:string){
    
    return this.httpClient.get(this.product + '/' + id);
  }
  
}
