import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from 'src/app/components/login/login.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
	declarations: [
		LoginPageComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	exports: []
})

export class AuthModule {}
