import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/models/auth';
import { PathRest } from '../../static/path-rest'
import decode from "jwt-decode";
import { AuthCurrent } from 'src/app/models/AuthCurrent';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router, private jwtHelperService: JwtHelperService) { }

  /**
  * Cabecera para ser inyectada en las peticiones POST 
  **/
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /**
  * Valida los campos enviados por el usuario 
  **/
  login(login: Auth): Observable<Auth> {
    return this.httpClient.post<Auth>(PathRest.POST_LOGIN, login);
  }

  /**
  * Cierra la sesión de un usuario 
  **/
  logout(): Observable<any> {

    return this.httpClient.post(PathRest.POST_LOGOUT, this.httpOptions);
  }

  /**
  * Valida si un usuario esta autenticado 
  **/
  isAuth() {
    const token: any = localStorage.getItem('access_token');

    if (this.jwtHelperService.isTokenExpired(token) || !localStorage.getItem('access_token')) {

      return false;
    }
    return true;
  }

  /**
  * Retorna el rol y el username del usuario que este logueado 
  **/
  userCurrent(): AuthCurrent {
    let token_decode: any = '';
    let data: any = { 'role': null, 'username': null };
    let user: AuthCurrent;
    const token: any = localStorage.getItem('access_token');

    if (token) {
      token_decode = decode(token);
      user = { 'role': token_decode.role, 'username': token_decode.username };
      data = user;
    }

    return data;

  }

}