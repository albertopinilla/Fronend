import { BuyPageComponent } from './pages/buy/buy-page/buy-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { ShoppingPageComponent } from './pages/shopping/shopping-page/shopping-page.component';
import { UsersPageComponent } from './pages/users/users-page/users-page.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { EditUsersComponent } from './pages/users/edit-users/edit-users/edit-users.component';

const appRoute:Routes= [

  {path: '', component:HomePageComponent},

  {path: 'login', component:LoginComponent},
  
  {path: 'products', component:ProductsComponent},

  {path: 'buy', component:BuyPageComponent},

  {path: 'shopping', component:ShoppingPageComponent},

  {path: 'users', component:UsersPageComponent},
  {path: 'users/create', component:CreateUserComponent},
  {path: 'users/edit/:id', component:EditUsersComponent},

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
