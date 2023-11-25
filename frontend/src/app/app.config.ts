import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiAlertModule, } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom,  DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(TuiAlertModule),
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
};
