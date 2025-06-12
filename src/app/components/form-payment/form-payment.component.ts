import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '../../services/toastr.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormPaymentService } from 'src/app/services/form-payment.service';


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
  private readonly toastr = inject(ToastService);
  private readonly formPaymentService = inject(FormPaymentService);

  private paymentSuscription?: Subscription ;

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

    if(this.form.get('ccnumber')!.value == '4111111111111111'){
      this.paymentSuscription = this.formPaymentService.submitPaymentTest(this.form.value).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
    else{
      this.formPaymentService.submitPayment(this.form.value);
    }

  }
}
