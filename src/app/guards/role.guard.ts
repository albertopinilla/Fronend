import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

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
