import { ProductsModule } from './pages/products/products.module';
import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BuyModule } from './pages/buy/buy.module';
import { ShoppingModule } from './pages/shopping/products.module';
import { UsersModule } from './pages/users/users.module';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { RolesModule } from './pages/roles/products.module';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    BuyModule,
    AppRoutingModule,
    ShoppingModule,
    UsersModule,
    ProductsModule,
    RolesModule,
    NgIdleKeepaliveModule.forRoot(),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    JwtHelperService,
    {
      provide: JWT_OPTIONS, useValue: JWT_OPTIONS
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}