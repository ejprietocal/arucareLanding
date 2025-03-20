import { definePreset } from '@primeng/themes';
import Material from '@primeng/themes/material';

export const MaterialPreset = definePreset(Material, {
  semantic: {
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3', // 👈 Azul (color primario)
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1'
    },
    colorScheme: {
      light: {
          surface: {
              0: '#ffffff',
              50: '{slate.50}',
              100: '{slate.100}',
              200: '{slate.200}',
              300: '{slate.300}',
              400: '{slate.400}',
              500: '{slate.500}',
              600: '{slate.600}',
              700: '{slate.700}',
              800: '{slate.800}',
              900: '{slate.900}',
              950: '{slate.950}'
          }
      },
    }
  }

})
