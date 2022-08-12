import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { RolesService } from 'src/app/services/roles/roles.service';

@Component({
  selector: 'app-roles-page',
  templateUrl: './roles-page.component.html',

})
export class RolesPageComponent implements OnInit {

  constructor(private rolesService: RolesService, private localStore: LocalStorageService, private modal: ModalService) { }

  roles: any = [];
  private role_id: number = 0;

  ngOnInit() {
    this.getAll();
  }

  /**
  * Retorna todos los roles
  **/
  getAll() {

    this.rolesService.getRoles()
      .subscribe((res: any) => {
        this.roles = res.roles;
      });

  }

  /**
  * Permite eliminar un rol 
  **/
  deleteProduct() {
    this.rolesService.deleteRole(this.role_id)
      .subscribe((res: any) => {
        this.getAll();

      });
  }

  /**
  * Abre el modal de confirmación de eliminación de un rol
  **/
  openModal(myModal: any, id: number) {
    this.role_id = id;
    this.modal.open(myModal);
  }

}
