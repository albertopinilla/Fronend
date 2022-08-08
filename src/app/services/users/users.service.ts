import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathRest } from 'src/app/static/path-rest';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users = PathRest.GET_USERS;
  
  constructor(private httpClient: HttpClient) { }
    
  getUsers(){
    return this.httpClient.get(this.users);
  }

}
