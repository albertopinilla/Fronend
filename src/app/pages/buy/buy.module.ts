import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BuyPageComponent } from './buy-page/buy-page.component';

@NgModule({
	declarations: [BuyPageComponent],
	imports: [CommonModule,FormsModule],
	exports: []
})

export class BuyModule {

}
