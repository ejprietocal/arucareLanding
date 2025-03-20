import { Injectable } from '@angular/core';
import { ResponsiveOptions } from '../interfaces/responsive-options';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  public readonly ResponsiveOptions : ResponsiveOptions[] = [
    { breakpoint: '1536px', numVisible: 5, numScroll: 1 }, // 2xl
    { breakpoint: '1280px', numVisible: 4, numScroll: 1 }, // xl
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 }, // lg
    { breakpoint: '768px', numVisible: 2, numScroll: 1 },  // md
    { breakpoint: '640px', numVisible: 1, numScroll: 1 }   // sm
  ];
}
