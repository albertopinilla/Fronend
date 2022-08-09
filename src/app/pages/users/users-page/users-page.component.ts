import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})

export class UsersPageComponent implements OnInit {

  public arrUsers: any = [];
  private user_id: number = 0;

  constructor(private users: UsersService, private modal: ModalService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getall();
  }

  getall() {
    this.users.getUsers()
      .subscribe((response: any) => {
        console.log(response);
        this.arrUsers = response;

      });
  }

  deleteUser() {
    this.users.deleteUser(this.user_id)
      .subscribe((res: any) => {
        this.getall();
        
      });
  }

  

  openModal(myModal: any, id: number) {
    this.user_id = id;
    this.modal.open(myModal);
  }

}

