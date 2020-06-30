import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<any>) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.pipe(
      select('tokenReducer'),
      flatMap((token) => {
        debugger;
        if (token) {
          const auth = `${token.tokenType} ${token.accessToken}`;
          req = req.clone({ headers: req.headers.set('Authorization', auth) });
          return next.handle(req);
        }

        return next.handle(req);
      })
    );
  }
}

// return token.pipe(
//   mergeMap((token: Token) => {
//     if (token) {
//       const auth = `${token.tokenType} ${token.accessToken}`;
//       req = req.clone({ headers: req.headers.set('Authorization', auth) });
//       return next.handle(req);
//     }

//     return next.handle(req);
//   })
// );
