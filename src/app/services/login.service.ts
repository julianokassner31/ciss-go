import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { Token } from '../model';
import { saveToken } from '../state/actions/token.actions';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private requestService: RequestService,
    private store: Store<{ token: Token }>
  ) {}

  login(form: FormGroup) {
    return this.requestService
      .postTypeFormUrlEnconded('/auth/login?loading', form)
      .pipe(
        map((resp) => resp.data),
        tap((data) => {
          const token = this.parseToken(data);
          localStorage.setItem('token', JSON.stringify(token));
        })
      );
  }

  parseToken(data: any) {
    return new Token(data);
  }
}
