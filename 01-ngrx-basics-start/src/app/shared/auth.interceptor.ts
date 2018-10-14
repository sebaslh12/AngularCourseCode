import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    // const copiedReq = req.clone({headers: req.headers.set('', '')});
    //const copiedReq = req.clone({ params: req.params.set('auth', this.authService.getToken()) });
    return this.store.select('auth').pipe(take(1),switchMap((auth: fromAuth.State) => {
      const copiedReq = req.clone({ params: req.params.set('auth', auth.token) });
      return next.handle(copiedReq);
    }));
    // return null;
  }
}
