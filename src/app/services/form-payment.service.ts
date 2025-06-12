import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormPaymentService {

  http = inject(HttpClient);

  submitPayment(data: any) : Observable<any> {
    const fullData = {
      ...data,
      security_key: environment.SECURITY_KEY,
    };

    const body = new URLSearchParams();
    for (const key in fullData) {
      body.set(key, fullData[key]);
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(`${environment.URL_DOMAIN}/${environment.PROXY_URL}`, body.toString(), { headers });
  }

  submitPaymentTest(data: any): Observable<any> {
    const fullData = {
      ...data,
      security_key: environment.SECURIY_KEY_TEST,
    };

    const body = new URLSearchParams();
    for (const key in fullData) {
      body.set(key, fullData[key]);
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(`${environment.URL_DOMAIN}/${environment.PROXY_URL}`, body.toString(), { headers });
  }
}
