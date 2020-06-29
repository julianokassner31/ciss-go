import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
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
        map((resp) => resp.data)
        // tap((data) => this.store.dispatch(saveToken(data)))
      );
  }
}
