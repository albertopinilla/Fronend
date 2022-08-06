import { BuyPageComponent } from './pages/buy/buy-page/buy-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

const appRoute:Routes= [
  {path: '', component:HomePageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'buy', component:BuyPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
