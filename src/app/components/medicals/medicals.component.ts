import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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

  readonly router = inject(Router);
}
