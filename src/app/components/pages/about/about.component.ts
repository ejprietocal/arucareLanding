import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { TabsModule } from 'primeng/tabs';
@Component({
  selector: 'app-about',
  imports: [
    DividerModule,
    TabsModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
