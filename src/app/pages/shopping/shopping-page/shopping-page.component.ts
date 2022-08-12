import { Component, OnInit } from '@angular/core';
import { BuyService } from 'src/app/services/buy/buy.service';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {

  constructor(private shoppings: BuyService) { }

  public data: any = [];

  ngOnInit() {
    this.getShoppings();
  }

  /**
  * Retorna todas las compras hechas por un usuario 
  **/
  getShoppings() {
    this.shoppings.shopping()
      .subscribe((res: any) => {
        this.data = res;
      });
  }

}
