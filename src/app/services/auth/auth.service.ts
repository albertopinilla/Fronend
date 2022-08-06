import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/models/auth';
import { PathRest } from '../../static/path-rest'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(login: Auth):Observable<Auth>
  {
    return this.httpClient.post<Auth>(PathRest.POST_LOGIN,login);
  }

}