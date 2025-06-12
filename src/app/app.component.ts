import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ToastrComponent } from './common/components/toastr/toastr.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ToastrComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'arucareLanding';

  route = inject(Router);
}
