import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-reserve',
  imports: [
    CommonModule,
    StepsModule
  ],
  templateUrl: './reserve.component.html',
  styleUrl: './reserve.component.css'
})
export class ReserveComponent {
  items :MenuItem[] = [
    {
        label: 'Personal info',
        routerLink: ''
    },
    {
        label: 'Reservation',
        routerLink: 'Booking Appointment'
    },
    {
        label: 'Review',
        routerLink: ''
    }
];

}
