import { CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateRolesComponent } from './create-roles/create-roles.component';
import { EditRolesComponent } from './edit-roles/edit-roles.component';
import { RolesPageComponent } from './roles-page/roles-page.component';

@NgModule({
	declarations: [RolesPageComponent,EditRolesComponent,CreateRolesComponent],
	imports: [
		CommonModule,
		BrowserModule,
		NgxPaginationModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule,
		HttpClientModule
	],
	exports: []
})

export class RolesModule {}
