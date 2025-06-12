import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '../../services/toastr.service';
import { Subscription } from 'rxjs/internal/Subscription';


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

  private paymentSuscription?: Subscription ;

  form = this.fb.group({
    ccnumber: ['', Validators.required],
    ccexp : ['', Validators.required],
    cvv : ['', Validators.required],
    amount : ['', Validators.required],
    phone : ['', Validators.required],
    address1: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    email: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
