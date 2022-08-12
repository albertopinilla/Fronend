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
    
  getUsers(){
    return this.httpClient.get(this.users);
  }

  getUser(id:number){
    return this.httpClient.get(`${this.users}/${id}`);
  }

  deleteUser(id:number)
  {
    return this.httpClient.delete(`${this.users}/${id}`);
  }
 
  createUser(user: User)
  {
    return this.httpClient.post<User>(PathRest.POST_USERS,user);
  }

  editUser(id:number)
  {
    return this.httpClient.get(`${this.users}/${id}`);
  }

  updateUser(id:number, data:any)
  {
    return this.httpClient.put(`${this.users}/${id}`,data);
  }

}
