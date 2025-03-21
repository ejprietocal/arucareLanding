import { Component, inject, Inject, Injectable, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResizeObserverService } from '../../../services/resize-observer.service';
import { Observable } from 'rxjs';
import { Resize } from '../../../interfaces/resize.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public menuOpen = false;
  public isClosing = false;

  private readonly resizeObserver = inject(ResizeObserverService);
  public screenSize : Signal<Resize> = this.resizeObserver.screenSize;

  public links = [
    { name: 'Home', url: '/' },
    { name: 'About us', url: '/about' },
    { name: 'Contact', url: '/contact' },
    { name: 'Privacy Policy', url: '/privacy&policy' },
    { name: 'Terms of Service', url: '/termsAndConditions' }
  ];


  toggleMenu() {
    if (this.menuOpen) {
      this.isClosing = true; // Activar la animación de salida
      setTimeout(() => {
        this.menuOpen = false; // Ocultar después de la animación
        this.isClosing = false; // Resetear el estado
      }, 500);
    } else {
      this.menuOpen = true; // Mostrar el menú inmediatamente
    }
  }
}
