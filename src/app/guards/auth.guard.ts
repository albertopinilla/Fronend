import { AuthService } from 'src/app/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationEnd, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  private auth: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    
   }

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(!this.authService.isAuth())
    {
      //alert('Token expirado o borrado')
      this.router.navigate(['login']);
      return false;
    }


    return true;
  }

}
