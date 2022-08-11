import { Component } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { AuthService } from './services/auth/auth.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: any;

  constructor(private idle: Idle, private keepalive: Keepalive, private authService: AuthService, private modal: ModalService,private router: Router) {
    
    idle.setIdle(50000);
    
    idle.setTimeout(5);
    
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onTimeout.subscribe(() => {
      this.idleState = 'La sesión ha expirado!';
      this.timedOut = true;
      this.authService.logout().subscribe((res) => {
        this.router.navigateByUrl('login');
      });
    });
    
    idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'No hemos detectado actividad en los últimos minutos, la sesión se cerrara en ' + countdown + ' segundos!');

    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
  }

  reset() {
    this.idle.watch();
    this.idleState = '';
    this.timedOut = false;
  }
}
