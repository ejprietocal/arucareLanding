import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core'; // Asegúrate de tener esto si usas signals en Angular

export interface ToastOptions {
  message: string;
  icon: string;   // SVG cargado como string
  color: 'success' | 'error' | 'info' | 'warning'; // Ajustado para tipos de color
  duration: number;  // Nueva propiedad para la duración del toast
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  isVisible = signal(false);
  options = signal<ToastOptions>({
    message: '',
    icon: '',   // SVG cargado como string
    color: 'info', // Definir color por defecto
    duration: 4000,  // Duración por defecto (3 segundos)
  });

  constructor(private http: HttpClient) {}

  // Método para mostrar el toast con la configuración adecuada
  show(opts: ToastOptions) {
    this.setIconAndColor(opts.color);
    this.options.set({
      message: opts.message,
      icon: this.options().icon,  // Icono actualizado
      color: opts.color,
      duration: opts.duration,  // Duración recibida
    });
    this.isVisible.set(true);
    setTimeout(() => this.isVisible.set(false), opts.duration);  // Se oculta después de la duración indicada
  }

  // Método para cargar el SVG según el tipo de mensaje
  private setIconAndColor(color: string) {
    switch (color) {
      case 'success':
        this.loadSVG('assets/icons/check.svg').subscribe(svg => {
          this.options().icon = svg;
        });
        break;
      case 'error':
        this.loadSVG('assets/icons/danger.svg').subscribe(svg => {
          this.options().icon = svg;
        });
        break;
      case 'info':
        this.loadSVG('assets/icons/info.svg').subscribe(svg => {
          this.options().icon = svg;
        });
        break;
      case 'warning':
        this.loadSVG('assets/icons/warning.svg').subscribe(svg => {
          this.options().icon = svg;
        });
        break;
      default:
        break;
    }
  }

  // Método para cargar el SVG desde la ruta proporcionada
  loadSVG(iconPath: string) {
    return this.http.get(iconPath, { responseType: 'text' });
  }

  // Método para cerrar el toast
  close() {
    this.isVisible.set(false);
  }
}
