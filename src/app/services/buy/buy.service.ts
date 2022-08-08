import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Buy } from 'src/app/models/buy';
import { PathRest } from 'src/app/static/path-rest';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  private purchase = PathRest.POST_BUY;
  private shoppings = PathRest.GET_SHOPPING;
 
  constructor(private httpClient: HttpClient) { }
    
  buy(products: Buy){
    
    return this.httpClient.post<Buy>(this.purchase, products);

  }

  shopping()
  {
   
    return this.httpClient.get(this.shoppings);
  }

}
