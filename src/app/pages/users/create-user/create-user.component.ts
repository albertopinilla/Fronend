import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UsersService) { }

  registerForm: any = FormGroup;

  submitted = false;

  get f() { return this.registerForm.controls; }

  onSubmit(): void {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {

      const user: User = this.registerForm.value;

      this.userService.createUser(user)
        .subscribe((data: any) => {
          console.log(data)
        });

    }

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required], Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required]]
    });

  }




}