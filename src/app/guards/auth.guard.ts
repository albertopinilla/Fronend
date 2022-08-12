import { AuthService } from 'src/app/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  private auth: boolean = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  /**
  * Valida si el usuario esta logueado, si no, redirecciona al login
  * @param route
  * @return boolean
  **/
  canActivate(route: ActivatedRouteSnapshot): boolean {

    if (!this.authService.isAuth()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
