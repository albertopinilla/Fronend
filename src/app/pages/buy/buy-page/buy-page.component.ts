import { BuyService } from './../../../services/buy/buy.service';
import { Component, OnInit } from '@angular/core';
import { Buy } from 'src/app/models/buy';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {
 

  constructor(private router: Router, private localStore: LocalStorageService, private newpurchase: BuyService) {

  }

  public datos: any = [];

  public total: number = 0;

  private purchase: any = [];

  ngOnInit(): void {

    let keys = [];
    this.datos = [];
    keys = Object.keys(localStorage);

    keys.forEach((element, index) => {

      this.datos.push(JSON.parse(localStorage[element]));
      this.datos[index]['cantidad'] = '1';

    });
    //console.log(this.datos)
    this.calcularPrecio();

  }

  calcularPrecio() {
    this.total = 0;
    for (let index = 0; index < this.datos.length; index++) {

      this.total += this.datos[index].cantidad * this.datos[index].price;
    }
  }

  buy() {

    this.purchase = [];
    for (let i = 0; i < this.datos.length; i++) {
      this.purchase.push({ 'product_id': parseInt(this.datos[i].id), 'amount': parseInt(this.datos[i].cantidad)});
    }
   
    const buy: Buy = this.purchase;

    this.newpurchase.buy(buy).subscribe((data) => {
      console.log(data);
      this.localStore.clearData();
      this.ngOnInit();
    }, error=>{
      if(error.error.message === 'No autenticado')
      {
        void this.router.navigateByUrl('/login');
      }
      console.log(error);
    });

  }

  deleteItem(id: string) {
    
    localStorage.removeItem(id)
    this.calcularPrecio();
    this.ngOnInit();
  }

}
