import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
})

export class EditUsersComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private userService: UsersService) {

    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUser(this.userId)
      .subscribe((data: any) => {

        this.formUserEdit.setValue({
          name: data.user.name,
          email: data.user.email,
          password: null,
          password_confirmation: null
        });

      })
  }

  private userId: any;
  public formUserEdit: any = FormGroup;
  public submitted = false;

  get f() { return this.formUserEdit.controls; }

  
  /**
  * Recibe los datos enviados por el usuario para ser procesados 
  **/
  onSubmit(): void {

    this.submitted = true;

    if (this.formUserEdit.invalid) {
      return;
    }

  }

  /**
  * Valida los campos enviados por el usuario 
  **/
  ngOnInit() {

    this.formUserEdit = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      password_confirmation: ['']
    });
  }

}