import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent{

  public products: number = 0;

  @Input() role: string = '';
  @Input() username: string = ''
  constructor(private LocalStorageService: LocalStorageService, private authService: AuthService, private router: Router) {
    
  }

  /**
  * Cierra la sesión usando un servicio, redirecciona a login y borra el token guardado en local storage 
  **/
  logOut() {
    this.authService.logout().subscribe((res: any) => {
      this.router.navigateByUrl('login');
      localStorage.removeItem('access_token')
    });
  }

}
