import { Component} from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-reserve',
  imports: [
    StepperModule,
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
  }


}
