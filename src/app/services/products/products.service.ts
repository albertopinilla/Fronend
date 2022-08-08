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
    //http://192.168.0.80/backend/api/v1/products?page=1
  }

  getProduct(id:string){
    //alert(this.product + '/' + id)
    return this.httpClient.get(this.product + '/' + id);
  }
  
}
