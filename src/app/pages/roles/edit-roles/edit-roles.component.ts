import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles/roles.service';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
})

export class EditRolesComponent implements OnInit {

  private productId: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private rolesService: RolesService) {

    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.rolesService.getRole(this.productId)
      .subscribe((res: any) => {
        
        this.formRoleEdit.setValue({
          name: res.role.name,
         
        });
       
      })
  }

  public formRoleEdit: any = FormGroup;
  public submitted = false;
  
  get f() { return this.formRoleEdit.controls; }

  onSubmit(): void {

    this.submitted = true;
    // stop here if form is invalid
    if (this.formRoleEdit.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {

      // this.userService.updateUser(this.productId,this.formProductEdit)
      // .subscribe((data:any) => {

      // });
      // this.login.login(user)
      //   .subscribe((data:any) => {
 
      //     sessionStorage.setItem('access_token',data.token);
      //     void this.router.navigateByUrl('');
      //   }, error=>{
      //     alert('El usuario y/o contraseña son incorrectos')
      //   });

    }

  }

  ngOnInit() {
    
    this.formRoleEdit = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
     
    });
  }

}