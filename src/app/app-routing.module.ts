import { RoleGuard } from './guards/role.guard';
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
  {path: 'logout', component:LoginComponent, canActivate: [AuthGuard]},
  
  {path: 'buy', component:BuyPageComponent, canActivate: [AuthGuard,RoleGuard], data: {role: 'Cliente'}},

  {path: 'shopping', component:ShoppingPageComponent, canActivate: [AuthGuard,RoleGuard],data: {role: 'Cliente'}},

  {path: 'users', component:UsersPageComponent, canActivate: [AuthGuard,RoleGuard], data: {role: 'Administrador'}},
  {path: 'users/create', component:CreateUserComponent, canActivate: [AuthGuard,RoleGuard], data: {role: 'Administrador'}},
  {path: 'users/edit/:id', component:EditUsersComponent, canActivate: [AuthGuard,RoleGuard], data: {role: 'Administrador'}},

  {path: 'roles', component:RolesPageComponent, canActivate: [AuthGuard,RoleGuard], data: {role: 'Administrador'}},
  {path: 'roles/create', component:CreateRolesComponent, canActivate: [AuthGuard,RoleGuard], data: {role: 'Administrador'}},
  {path: 'roles/edit/:id', component:EditRolesComponent, canActivate: [AuthGuard,RoleGuard], data: {role: 'Administrador'}},

  {path: 'products', component:ProductsPageComponent, canActivate: [AuthGuard,RoleGuard], data: {role: ['Administrador','Vendedor']}},
  {path: 'products/create', component:CreateProductsComponent, canActivate: [AuthGuard,RoleGuard], data: {role: 'Administrador'}},
  {path: 'products/edit/:id', component:EditProductsComponent, canActivate: [AuthGuard,RoleGuard], data: {role: 'Administrador'}},

  {path: '**', pathMatch: 'full', redirectTo: ''}

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
