import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private login: AuthService) { }

  registerForm: any = FormGroup;
  submitted = false;

  get f() { return this.registerForm.controls; }

  onSubmit(): void {

    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    if (this.submitted) {

      const user: Auth = this.registerForm.value;

      this.login.login(user)
        .subscribe((data: any) => {
          localStorage.setItem('access_token', data.token);
          void this.router.navigateByUrl('');
        }, error => {
          alert('El usuario y/o contraseña son incorrectos')
        });

    }

  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
  }

}
