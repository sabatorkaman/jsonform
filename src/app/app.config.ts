import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {register} from './layout/dynamic-layout.directive';
import {VerticalComponent} from './vertical/vertical.component';
import {ElementComponent} from './element/element.component';
import {HorizontalComponent} from './horizontal/horizontal.component';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

  provideAnimationsAsync(),
  providePrimeNG({
    theme: {
      preset: Aura
    }
  })
,
    provideClientHydration(withEventReplay())]
};


register("vertical", VerticalComponent)
register("element", ElementComponent)
register("horizontal" , HorizontalComponent)
