import { RolesService } from './../../../services/roles/roles.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-create-roles',
  templateUrl: './create-roles.component.html',
})

export class CreateRolesComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private rolesService: RolesService) { }

  createRolForm: any = FormGroup;

  submitted = false;

  get f() { return this.createRolForm.controls; }

  /**
  * Recibe los datos enviados por el formulario para se validados
  **/
  onSubmit(): void {

    this.submitted = true;

    if (this.createRolForm.invalid) {
      return;
    }

    if (this.submitted) {

      const role: Role = this.createRolForm.value;

      this.rolesService.createRole(role)
        .subscribe((data: any) => {
          this.createRolForm.reset();
        });
    }

  }

  /**
  * Valida los datos enviados por el usuario 
  **/
  ngOnInit() {
    this.createRolForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }

}
