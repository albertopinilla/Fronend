import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PathRest } from '../static/path-rest';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  /**
  * Interceptor que inyecta el token JWT para todas las peticiones al servidor y las recibe.
  * @param request
  * @return Observable
  **/
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('access_token')!;

    let requestClone = request;

    if (!this.isLogin(request.url)) {

      requestClone = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    return next.handle(requestClone).pipe(catchError((error) => this.herrorHandler(error)));
  }

  /**
  * Valida si una ruta el usuario puede acceder a una ruta para validar si esta logueado.
  * @param url
  * @return boolean
  **/
  private isLogin(url: string): boolean {

    return url.search(PathRest.POST_LOGIN) != -1;
  }

  /**
  * Recibe los errores del servidor de la clase HttpErrorResponse 
  * @param error
  * @return Observable
  **/
  private herrorHandler(error: HttpErrorResponse): Observable<never> {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {

      } else {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    }
    return throwError(error);
  }

}