import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';


@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {

  constructor(private localStore: LocalStorageService) {

  }

  datos: any = [];

  //cantidad:number = 1;

  total: number = 0;


  ngOnInit(): void {

    let keys = [];
    this.datos = [];
    keys = Object.keys(localStorage);
    
    keys.forEach((element, index) => {
   
      this.datos.push(JSON.parse(localStorage[element]));
      this.datos[index]['cantidad'] = '1';
  
    });
    console.log(this.datos)
    this.calcularPrecio();

  }

  calcularPrecio() {
    this.total = 0;
    for (let index = 0; index < this.datos.length; index++) {

      this.total += this.datos[index].cantidad * this.datos[index].price;
    }
  }

  comprar() {
    
  }

  deleteItem(id: string) {
    //removeData
    localStorage.removeItem(id)
    this.calcularPrecio();
    this.ngOnInit();
  }

}
