import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem('access_token')!;
    
    const requestClone = request.clone({
      headers: request.headers.set('Authorization',`Bearer ${token}`)
    });

    console.log(requestClone)
    return next.handle(requestClone);
  }

}