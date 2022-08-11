import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Route, Router } from '@angular/router';
import { PathRest } from '../static/path-rest';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

constructor(private router: Router) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(
//         catchError(e => this.handleError(request, next, e, request, 1))
//     );
// }

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

  private isLogin(url: string): boolean {
    
  	return url.search(PathRest.POST_LOGIN) != -1;
  }

  private herrorHandler(error: HttpErrorResponse): Observable<never> {
  	if (error instanceof HttpErrorResponse) {
  		if (error.error instanceof ErrorEvent) {
  			//alert('ERROR DE CLIENTE');
  		} else {
  			if (error.status === 401) {
  				this.router.navigate(['/login']);
  			} else {
  				//alert('ERROR DE SERVIDOR');
  			}
  		}
  	} else {
  		//alert('OTRO TIPO DE ERROR');
  	}
  	return throwError(error);
  }

}