import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { RolesService } from 'src/app/services/roles/roles.service';

@Component({
  selector: 'app-roles-page',
  templateUrl: './roles-page.component.html',
 
})
export class RolesPageComponent implements OnInit {

  roles: any = [];
  private role_id:number = 0;

  constructor(private rolesService: RolesService, private localStore: LocalStorageService, private modal: ModalService) {
    
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    
    this.rolesService.getRoles()
      .subscribe((res: any) => {
        
        this.roles = res.roles;
     
      });
    
  }
  
  deleteProduct() {
    this.rolesService.deleteRole(this.role_id)
      .subscribe((res: any) => {
        this.getAll();
        
      });
  }

  openModal(myModal: any, id: number) {
    this.role_id = id;
    this.modal.open(myModal);
  }

  // saveData(key: string) {

  //   this.service.getProduct(key)
  //     .subscribe((response: any) => {
  //       localStorage.setItem(key, JSON.stringify(response.product));
  //     });

  //   this.carrito = this.localStore.shoppingCart();
  // }

}
