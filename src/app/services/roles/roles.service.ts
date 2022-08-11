import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from 'src/app/models/role';
import { PathRest } from 'src/app/static/path-rest';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private roles = PathRest.ROLES;
  
  constructor(private httpClient: HttpClient) { }
    
  getRoles(){
    return this.httpClient.get(this.roles);
  }

  getRole(id:number){
    return this.httpClient.get(`${this.roles}/${id}`);
  }

  deleteRole(id:number)
  {
    return this.httpClient.delete(`${this.roles}/${id}`);
  }

 
  createRole(role: Role)
  {
    return this.httpClient.post<Role>(PathRest.ROLES,role);
  }

  editRole(id:number)
  {
    return this.httpClient.get(`${this.roles}/${id}`);
  }

  updateRole(id:number, data:any)
  {
    return this.httpClient.put(`${this.roles}/${id}`,data);
  }

}
