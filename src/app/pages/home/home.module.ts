import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	declarations: [HomePageComponent],
	imports: [CommonModule,NgxPaginationModule],
	exports: []
})

export class HomeModule {

}
