import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  /**
  * Se obtienen los atributos role y username que vienen en el Payload del token, estos se usan para mostrar el 
  * username en el inicio de sesión del usuario y para validar los permisos que tendra el usuario de acuerdo a su rol
  * @param route
  * @return boolean
  **/
  canActivate(route: ActivatedRouteSnapshot) {

    const token: any = localStorage.getItem('access_token');
    const role = route.data['role'];
    const token_decode: any = decode(token);

    let isFounded = token_decode.role.some((v: any) => role.includes(v));

    if (isFounded) {
      return true;
    }

    return false;
  }

}
