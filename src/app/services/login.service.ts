import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private requestService: RequestService) {}

  login(form: any) {
    return this.requestService.postTypeFormUrlEnconded('/auth/login', form);
  }
}
