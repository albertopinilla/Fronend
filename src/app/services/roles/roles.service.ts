import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from 'src/app/models/role';
import { PathRest } from 'src/app/static/path-rest';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private httpClient: HttpClient) { }

  private roles = PathRest.ROLES;

  /**
  * retorna todos los roles 
  **/
  getRoles() {
    return this.httpClient.get(this.roles);
  }

  /**
  * Retorna un rol 
  **/
  getRole(id: number) {
    return this.httpClient.get(`${this.roles}/${id}`);
  }

  /**
  * Elimina un rol 
  **/
  deleteRole(id: number) {
    return this.httpClient.delete(`${this.roles}/${id}`);
  }

  /**
  * Crea un rol 
  **/
  createRole(role: Role) {
    return this.httpClient.post<Role>(PathRest.ROLES, role);
  }

  /**
  * Retorna el rol que se va a actualizar
  **/
  editRole(id: number) {
    return this.httpClient.get(`${this.roles}/${id}`);
  }

  /**
  * Actualiza un rol 
  **/
  updateRole(id: number, data: any) {
    return this.httpClient.put(`${this.roles}/${id}`, data);
  }

}
