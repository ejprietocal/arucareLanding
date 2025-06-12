import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume-payment',
  imports: [
    CommonModule,

  ],
  templateUrl: './resume-payment.component.html',
  styles: ``
})
export default class ResumePaymentComponent {

  private readonly route = inject(ActivatedRoute);
  params : Record<string, string> = {};

  ngOnInit(){
     this.params = this.route.snapshot.queryParams;
  }

}
