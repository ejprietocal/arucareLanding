import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-medicals',
  imports: [
    CommonModule,
    AnimateOnScrollModule
  ],
  templateUrl: './medicals.component.html',
  styleUrl: './medicals.component.css'
})
export class MedicalsComponent {

}
