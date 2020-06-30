import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  url = environment.url;
  constructor(private http: HttpClient) {}

  get(uri: string, params?: any): Observable<any> {
    if (params) {
      return this.http.get(this.url.concat(uri), {
        params: params,
      });
    }

    return this.http.get(this.url.concat(uri));
  }

  postTypeFormUrlEnconded(uri: string, form: FormGroup): Observable<any> {
    return this.http.post(this.url.concat(uri), this.generateFormaData(form), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  private generateFormaData(form: FormGroup): string {
    const params = [];
    Object.keys(form.value).forEach((key) => {
      params.push(key.concat('=').concat(form.value[key]));
    });

    return params.reduce((ac, prev) => {
      return (ac += '&'.concat(prev));
    });
  }
}
