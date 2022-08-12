import { Component } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { AuthService } from './services/auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {

  /**
  * Valida si la ruta actual es diferente de /login para iniciar el Timeout por inactividad 
  **/
  constructor(private idle: Idle, private keepalive: Keepalive, private authService: AuthService, private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let data = this.authService.userCurrent();
        this.role = data.role;
        this.username = data.username;

        if (event.url !== '/login') {
          this.start();
        }
      }
    });

  }

  idleState = '';
  timedOut = false;
  lastPing?: any;
  role: any;
  username:any; 

  /**
  * Inicia el contador de Timeout 
  **/
  start() {
    this.idle.setIdle(300);

    this.idle.setTimeout(60);
   
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onTimeout.subscribe(() => {
 
        this.idleState = 'La sesión ha expirado!';
        this.timedOut = true;
        this.authService.logout().subscribe((res) => {
          this.router.navigateByUrl('login');
          localStorage.removeItem('access_token');
        });
  
    });
    
    this.idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'No hemos detectado actividad en los últimos minutos, la sesión se cerrara en ' + countdown + ' segundos!');

    this.keepalive.interval(15);

    this.keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
  }

  /**
  * Reinicio de contador de time out
  **/
  reset() {
    this.idle.watch();
    this.idleState = '';
    this.timedOut = false;
  }
}
