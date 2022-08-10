import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})

export class EditUsersComponent implements OnInit {

  private userId: any;



  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private userService: UsersService) {

    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUser(this.userId)
      .subscribe((data: any) => {
        console.log(data.user)

        this.formUserEdit.setValue({
          name: data.user.name,
          email: data.user.email,
          password: null,
          password_confirmation: null
        });

      })
  }

  public formUserEdit: any = FormGroup;
  public submitted = false;
  
  get f() { return this.formUserEdit.controls; }

  onSubmit(): void {

    this.submitted = true;
    // stop here if form is invalid
    if (this.formUserEdit.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      console.log(this.formUserEdit.value)
      // this.userService.updateUser(this.userId,this.formUserEdit)
      // .subscribe((data:any) => {
      //   console.log(data)
      // });
      // this.login.login(user)
      //   .subscribe((data:any) => {
      //     //console.log(data)
      //     sessionStorage.setItem('access_token',data.token);
      //     void this.router.navigateByUrl('');
      //   }, error=>{
      //     alert('El usuario y/o contraseña son incorrectos')
      //   });

    }

  }

  ngOnInit() {
    //Add User form validations
    this.formUserEdit = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      password_confirmation: ['']
    });
  }

}