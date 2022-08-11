import { BuyPageComponent } from './pages/buy/buy-page/buy-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { ShoppingPageComponent } from './pages/shopping/shopping-page/shopping-page.component';
import { UsersPageComponent } from './pages/users/users-page/users-page.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { EditUsersComponent } from './pages/users/edit-users/edit-users/edit-users.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductsPageComponent } from './pages/products/products-page/products-page.component';
import { EditProductsComponent } from './pages/products/edit-products/edit-products.component';
import { CreateProductsComponent } from './pages/products/create-products/create-products.component';
import { RolesPageComponent } from './pages/roles/roles-page/roles-page.component';
import { CreateRolesComponent } from './pages/roles/create-roles/create-roles.component';
import { EditRolesComponent } from './pages/roles/edit-roles/edit-roles.component';

const appRoute:Routes= [

  {path: '', component:HomePageComponent, canActivate: [AuthGuard]},

  {path: 'login', component:LoginComponent},
  {path: 'logout', component:LoginComponent},
  
  {path: 'buy', component:BuyPageComponent},

  {path: 'shopping', component:ShoppingPageComponent},

  {path: 'users', component:UsersPageComponent},
  {path: 'users/create', component:CreateUserComponent},
  {path: 'users/edit/:id', component:EditUsersComponent},

  {path: 'roles', component:RolesPageComponent},
  {path: 'roles/create', component:CreateRolesComponent},
  {path: 'roles/edit/:id', component:EditRolesComponent},

  {path: 'products', component:ProductsPageComponent},
  {path: 'products/create', component:CreateProductsComponent},
  {path: 'products/edit/:id', component:EditProductsComponent},

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
