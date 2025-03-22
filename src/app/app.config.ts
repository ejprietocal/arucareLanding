import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { MaterialPreset } from './presets/material.presets';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: MaterialPreset,
            options:{
              cssLayer: {
                name: 'primeng',
                order: 'base, theme, primeng, components, utilities'
              },
              darkModeSelector: false || 'none'
            }
        }
    })
  ]
};
