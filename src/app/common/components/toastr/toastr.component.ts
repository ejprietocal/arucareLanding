import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastService } from '../../../services/toastr.service';

@Component({
  selector: 'app-toastr',
  imports: [
    CommonModule
  ],
  templateUrl: './toastr.component.html',
  styles: ``
})
export class ToastrComponent {
  toastService = inject(ToastService);  // Inyectamos el servicio
}
