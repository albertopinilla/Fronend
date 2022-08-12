import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles/roles.service';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
})

export class EditRolesComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private rolesService: RolesService) {

    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.rolesService.getRole(this.productId)
      .subscribe((res: any) => {

        this.formRoleEdit.setValue({
          name: res.role.name,

        });

      })
  }

  private productId: any;
  public formRoleEdit: any = FormGroup;
  public submitted = false;

  get f() { return this.formRoleEdit.controls; }

  /**
  * Recibe los datos del formulari para ser validados
  **/
  onSubmit(): void {

    this.submitted = true;
   
    if (this.formRoleEdit.invalid) {
      return;
    }
   
  }

  /**
  * Valida los datos enviados por el usuario 
  **/
  ngOnInit() {

    this.formRoleEdit = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

}