import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',

})
export class ProductsPageComponent implements OnInit {

  products: any = [];
  p: number = 1;
  total: number = 0;
  private product_id: number = 0;

  constructor(private productService: ProductsService, private localStore: LocalStorageService, private modal: ModalService) {

  }

  ngOnInit() {
    this.getAll();
  }

  
  /**
  * Retorna todos los productos
  **/
  getAll() {

    this.productService.getProducts(this.p)
      .subscribe((res: any) => {

        this.products = res.data;
        this.total = res.total;

      });

  }


  /**
  * Permite hacer la pagianción de los productos 
  * @param event
  **/
  pageChangeEvent(event: number) {
    this.p = event;
    this.getAll();
  }

  
  /**
  * Elimina un producto
  **/
  deleteProduct() {
    this.productService.deleteProduct(this.product_id)
      .subscribe((res: any) => {
        this.getAll();

      });
  }

  
  /**
  * Abre el modal de confirmación para la eliminación de un producto 
  * @param error
  * @param id
  **/
  openModal(myModal: any, id: number) {
    this.product_id = id;
    this.modal.open(myModal);
  }

}
