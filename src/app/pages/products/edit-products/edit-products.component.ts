import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
})

export class EditProductsComponent implements OnInit {

  private productId: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private productsService: ProductsService) {

    this.productId = this.activatedRoute.snapshot.paramMap.get('id');

    this.productsService.getProduct(this.productId)
      .subscribe((data: any) => {
        
        this.formProductEdit.setValue({
          name: data.product.name,
         
        });
       
      })
  }

  public formProductEdit: any = FormGroup;
  public submitted = false;

  get f() { return this.formProductEdit.controls; }

  onSubmit(): void {

    this.submitted = true;
    // stop here if form is invalid
    if (this.formProductEdit.invalid) {
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

    this.formProductEdit = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      
    });
  }

}