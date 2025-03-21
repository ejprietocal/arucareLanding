import { Component} from '@angular/core';
import { PhotoService } from '../../services/photo.service';


@Component({
  selector: 'app-reserve',
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
