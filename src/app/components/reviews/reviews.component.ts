import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'primeng/carousel';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-reviews',
  imports: [
    CommonModule,
    CarouselModule,
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

  private readonly breakPoints = inject(ResponsiveService);
  public readonly responsibleBreakpoints = this.breakPoints.ResponsiveOptions;

  products = [
    { name: 'Image 1', image: 'https://via.placeholder.com/150' },
    { name: 'Image 2', image: 'https://via.placeholder.com/150' },
    { name: 'Image 3', image: 'https://via.placeholder.com/150' },
    { name: 'Image 4', image: 'https://via.placeholder.com/150' },
  ];
}
