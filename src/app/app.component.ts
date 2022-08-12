import { Component } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { AuthService } from './services/auth/auth.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {

  idleState = '';
  timedOut = false;
  lastPing?: any;
  role: any;
  username:any; 

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

  start() {
    this.idle.setIdle(60);

    this.idle.setTimeout(5);
   
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onTimeout.subscribe(() => {
 
        this.idleState = 'La sesión ha expirado!';
        this.timedOut = true;
        this.authService.logout().subscribe((res) => {
          this.router.navigateByUrl('login');
          localStorage.removeItem('access_token');
        });
  
    });

    //this.idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    this.idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'No hemos detectado actividad en los últimos minutos, la sesión se cerrara en ' + countdown + ' segundos!');

    this.keepalive.interval(15);

    this.keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
  }

  reset() {
    this.idle.watch();
    this.idleState = '';
    this.timedOut = false;
  }
}
