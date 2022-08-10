import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/models/auth';
import { PathRest } from '../../static/path-rest'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(login: Auth):Observable<Auth>
  {
    return this.httpClient.post<Auth>(PathRest.POST_LOGIN,login);
  }

  logout(): Observable<any> {
    
    return this.httpClient.post(PathRest.POST_LOGOUT, this.httpOptions);
  }

}