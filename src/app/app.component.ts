import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoaderComponent } from './common/components/loader/loader.component';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'arucareLanding';

  loaderService = inject(LoaderService);
  route = inject(Router);
}
