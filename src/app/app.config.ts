import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { provideRouter } from '@tanstack/angular-router';

import { routeTree } from './router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter({ routeTree }),
    provideHttpClient(withFetch()),
  ],
};
