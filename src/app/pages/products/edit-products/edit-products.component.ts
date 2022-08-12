import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
})

export class EditProductsComponent implements OnInit {

  
  /**
  * Se obtiene el id de cada producto por URL para su edición 
  **/
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
  private productId: any;

  get f() { return this.formProductEdit.controls; }

  
  /**
  * Recibe los datos del formulario para  ser procesados
  **/
  onSubmit(): void {

    this.submitted = true;

    if (this.formProductEdit.invalid) {
      return;
    }

  }

  

  /**
  * Valida los datos enviados por el formulario
  **/
  ngOnInit() {

    this.formProductEdit = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

}