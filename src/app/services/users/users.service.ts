import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { PathRest } from 'src/app/static/path-rest';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  private users = PathRest.GET_USERS;
    
  /**
  * Retorna todos los usuarios
  **/
  getUsers(){
    return this.httpClient.get(this.users);
  }

  /**
  * Retorna un usuario 
  **/
  getUser(id:number){
    return this.httpClient.get(`${this.users}/${id}`);
  }

  /**
  * Elimina un usuario 
  **/
  deleteUser(id:number)
  {
    return this.httpClient.delete(`${this.users}/${id}`);
  }
 
  /**
  * Crea un usuario 
  **/
  createUser(user: User)
  {
    return this.httpClient.post<User>(PathRest.POST_USERS,user);
  }

  /**
  * Retorna el usuario que se va a actualizar 
  **/
  editUser(id:number)
  {
    return this.httpClient.get(`${this.users}/${id}`);
  }

  /**
  * actualiza un usuario 
  **/
  updateUser(id:number, data:any)
  {
    return this.httpClient.put(`${this.users}/${id}`,data);
  }

}
