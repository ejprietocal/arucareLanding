import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { MedicalsComponent } from '../../medicals/medicals.component';
import { ReserveComponent } from '../../reserve/reserve.component';
import { DividerModule } from 'primeng/divider';
import { TeamComponent } from '../../team/team.component';
import { PhotoService } from '../../../services/photo.service';
import { Galleria } from '../../../interfaces/galleria';
import { ButtonModule } from 'primeng/button';
import { ResponsiveOptions } from '../../../interfaces/responsive-options';
import { ResponsiveService } from '../../../services/responsive.service';
import { GalleriaModule } from 'primeng/galleria';



@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    CarouselModule,
    ReviewsComponent,
    MedicalsComponent,
    ReserveComponent,
    DividerModule,
    TeamComponent,
    ButtonModule,
    GalleriaModule
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  responsiveOptions : ResponsiveOptions[] = [];
  images : Galleria[] = [];
  isActive!: Signal<boolean>;

  constructor(
    public readonly photoService: PhotoService,
    private readonly responsiveService: ResponsiveService,
  ){}

  get isActiveValue() {
    return this.isActive();
  }

  set isActiveValue(value: boolean) {
    this.photoService.isActive.set(value); // ✅ Ahora funciona porque es WritableSignal
  }

  ngOnInit(): void {
    this.photoService.getImages().then((images: Galleria[]) => this.images = images);
    this.responsiveService.ResponsiveOptions.forEach(option => this.responsiveOptions.push(option))
    this.isActive = this.photoService.isActive;
  }
}
