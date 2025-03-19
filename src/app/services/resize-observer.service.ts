import { Injectable, signal } from '@angular/core';
import { Resize } from '../interfaces/resize.interface';

@Injectable({ providedIn: 'root' })
export class ResizeObserverService {
  screenSize = signal<Resize>({width: window.innerWidth,height : window.innerHeight}); // Signal con el ancho inicial de la pantalla
  constructor() {
    window.addEventListener('resize', () => {
      this.screenSize.set({
        width: window.innerWidth,
        height: window.innerHeight
      }); // Actualiza el signal cuando cambia el tamaño
    });
  }
}
