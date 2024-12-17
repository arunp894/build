import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngxs/store';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideStore(),
    withNgxsStoragePlugin({
      keys : '*'
    })
  ]
};
