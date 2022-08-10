import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersPageComponent } from './users-page/users-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { RouterModule } from '@angular/router';
import { EditUsersComponent } from './edit-users/edit-users/edit-users.component';

@NgModule({
	declarations: [
		UsersPageComponent,
		CreateUserComponent,
  		EditUsersComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule,
	]
})

export class UsersModule {}
