import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormPaymentService {

  http = inject(HttpClient);

  submitPayment(data: any){
    const params = {
      ...data,
      security_key: environment.SECURITY_KEY,
    };
    // return this.http.post(environment.URL_ENDPOINT, null, { params });
  }

  submitPaymentTest(data: any) : Observable<any> {
    const params = {
      ...data,
      security_key: environment.SECURIY_KEY_TEST,
    };

    return this.http.post(environment.URL_ENDPOINT, null, { params });
  }
}
