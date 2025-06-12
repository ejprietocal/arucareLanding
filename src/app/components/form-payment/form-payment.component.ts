import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormPaymentService } from 'src/app/services/form-payment.service';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-form-payment',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  templateUrl: './form-payment.component.html',

})
export class FormPaymentComponent {

  private readonly fb = inject(FormBuilder);
  private readonly toastr = inject(ToastrService);
  private readonly formPaymentService = inject(FormPaymentService);
  private readonly router = inject(Router);

  private paymentSuscription?: Subscription ;
  loaderService = inject(LoaderService);

  form = this.fb.group({
    ccnumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    ccexp : ['', [Validators.required, Validators.pattern('^[0-9]{2}/[0-9]{2}$')]],
    cvv : ['', Validators.required],
    amount : ['', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]+)?$/)] ],
    phone : ['', Validators.required],
    address1: ['', [Validators.required, Validators.maxLength(100)]],
    country: ['', [Validators.required, Validators.maxLength(100)]],
    city: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    first_name: ['', [Validators.required, Validators.maxLength(100)]],
    last_name: ['',[Validators.required, Validators.maxLength(100)]],
  });

  onSubmit() {

    this.loaderService.showLoader();

    if(this.form.invalid){
      this.toastr.error('Please fill all the fields');
      this.form.markAllAsTouched();
      this.loaderService.hideLoader();
      return;
    }


    if(this.form.get('ccnumber')!.value == '4111111111111111'){
      this.paymentSuscription = this.formPaymentService.submitPaymentTest(this.form.value).subscribe({
        next: (data) => {

          const result: Record<string, string> = {};

          data.response.split('&').forEach((pair : any) => {
            const [key, value] = pair.split('=');
            result[key] = decodeURIComponent(value || '');
          });

          if (result['response_code'] === '100') {
              this.toastr.success(result['responsetext']);
              this.router.navigate(['resume'],{
                queryParams: {
                  ...result,
                  amount: this.form.get('amount')?.value,
                  date : new Date()
                }
              });

          } else {
            this.toastr.error(result['responsetext'] || 'Error en la transacción');
          }

          this.loaderService.hideLoader();

        },
        error: (error) => {
          console.log(error);
          this.loaderService.hideLoader();
        }
      });
    }
    else{
      this.paymentSuscription = this.formPaymentService.submitPayment(this.form.value).subscribe({
        next: (data) => {
          const result: Record<string, string> = {};
          data.response.split('&').forEach((pair : any) => {
            const [key, value] = pair.split('=');
            result[key] = decodeURIComponent(value || '');
          });

          if (result['response_code'] === '100') {
            this.toastr.success(result['responsetext']);
            this.router.navigate(['resume'],{
                queryParams: {
                  ...result,
                  amount: this.form.get('amount')?.value,
                  date : new Date()

                }
            });
          } else {
            this.toastr.error(result['responsetext'] || 'Error en la transacción');
          }

          console.log(result);

          this.loaderService.hideLoader();
        },
        error: (error) => {
          console.log(error);
          this.loaderService.hideLoader();
        }
      });
    }

  }

  ngOnDestroy(){
    this.paymentSuscription?.unsubscribe();
  }
}
