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
  private changesSuscription?: Subscription ;
  loaderService = inject(LoaderService);

  form = this.fb.group({
    ccnumber: ['', [Validators.required,Validators.pattern('^([0-9]{4} ){3}[0-9]{4}$') ]],
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
    const rawValue = this.form.getRawValue();
    rawValue.ccnumber = rawValue.ccnumber?.replace(/\s+/g, '') || '';

    if(this.form.get('ccnumber')!.value == '4111111111111111'){
      this.paymentSuscription = this.formPaymentService.submitPaymentTest(rawValue).subscribe({
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
      console.log(rawValue, this.form.value);
      this.paymentSuscription = this.formPaymentService.submitPayment(rawValue).subscribe({
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

  ngOnInit(): void {
   this.changesSuscription = this.form.get('ccexp')?.valueChanges.subscribe((value) => {
    if (!value) return;

    const cleaned = value.replace(/[^0-9]/g, '');

    if (cleaned.length >= 3) {
      const formatted = `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}`;
      if (value !== formatted) {
        this.form.get('ccexp')?.setValue(formatted, { emitEvent: false });
      }
    }
  });

  this.changesSuscription =this.form.get('ccnumber')?.valueChanges.subscribe((value) => {
    if (!value) return;

    const cleaned = value.replace(/\D+/g, '').slice(0, 16); // Solo números, máx 16
    const groups = cleaned.match(/.{1,4}/g); // Agrupa de a 4
    const formatted = groups ? groups.join(' ') : '';

    if (value !== formatted) {
      this.form.get('ccnumber')?.setValue(formatted, { emitEvent: false });
    }
  });
}

  ngOnDestroy(){
    this.paymentSuscription?.unsubscribe();
    this.changesSuscription?.unsubscribe();
  }
}
