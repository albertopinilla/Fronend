import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  public arrUsers: any = [];

  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.getall();
  }

  getall()
  {
    this.users.getUsers()
      .subscribe((response: any) => {
        console.log(response);
        this.arrUsers = response;

      });
  }

}
