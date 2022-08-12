import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
})

export class EditProductsComponent implements OnInit {

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

  onSubmit(): void {

    this.submitted = true;

    if (this.formProductEdit.invalid) {
      return;
    }

  }

  ngOnInit() {

    this.formProductEdit = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

}