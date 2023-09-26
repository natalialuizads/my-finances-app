import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiAlertModule, TuiRootModule } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(TuiRootModule, TuiAlertModule)
  ]
};
