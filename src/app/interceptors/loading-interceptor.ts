import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { hideLoading, showLoading } from '../state/actions/loading.action';
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private store: Store<{ loading: boolean }>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const loading = req.url.indexOf('?loading') > 0;

    if (loading) {
      this.store.dispatch(showLoading());
    }

    return next
      .handle(req)
      .pipe(
        tap((req) => setTimeout(() => this.store.dispatch(hideLoading()), 1000))
      );
  }
}
