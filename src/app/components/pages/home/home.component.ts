import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { MedicalsComponent } from '../../medicals/medicals.component';
import { ReserveComponent } from '../../reserve/reserve.component';
import { DividerModule } from 'primeng/divider';


@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    CarouselModule,
    ReviewsComponent,
    MedicalsComponent,
    ReserveComponent,
    DividerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
