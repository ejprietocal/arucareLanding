import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import { PhotoService } from '../../services/photo.service';
import { ButtonModule } from 'primeng/button';
import { ResponsiveService } from '../../services/responsive.service';
import { ResponsiveOptions } from '../../interfaces/responsive-options';

@Component({
  selector: 'app-reserve',
  imports: [
    CommonModule,
    StepsModule,
    ButtonModule
  ],
  templateUrl: './reserve.component.html',
  styleUrl: './reserve.component.css'
})
export class ReserveComponent{
  constructor(
    private readonly photoService: PhotoService
  ) { }

  toggle(){
    this.photoService.toggleState();
    console.log(this.photoService.isActive());
  }

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
