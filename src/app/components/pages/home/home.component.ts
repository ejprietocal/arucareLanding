import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ReviewsComponent } from '../../reviews/reviews.component';


@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    CarouselModule,

    ReviewsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
