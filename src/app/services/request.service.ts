import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  url = environment.url;
  constructor(private http: HttpClient) {}

  get(uri: string, params: any): Observable<any> {
    return this.http.get(this.url.concat(uri), {
      params: params,
    });
  }

  postTypeFormUrlEnconded(uri: string, form): Observable<any> {
    return this.http.post(this.url.concat(uri), this.generateFormaData(form), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  private generateFormaData(form) {
    const params = [];
    Object.keys(form).forEach((key) => {
      params.push(key.concat('=').concat(form[key]));
    });

    return params.reduce((ac, prev) => {
      return (ac += '&'.concat(prev));
    });
  }
}
