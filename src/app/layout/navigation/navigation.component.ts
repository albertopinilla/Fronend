import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/localstorage/localstorage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public products: number = 0;


  @Input() role: string = '';
  @Input() username: string = ''
  constructor(private LocalStorageService: LocalStorageService, private authService: AuthService, private router: Router) {
    // this.authService.userCurrent().subscribe((res: any) => {
    //   this.role = res;
     
    // });
  }

  ngOnInit(): void {


  }

  logOut() {
    this.authService.logout().subscribe((res: any) => {
      this.router.navigateByUrl('login');
      localStorage.removeItem('access_token')
    });
  }

}
