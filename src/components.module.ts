import {NgModule} from '@angular/core';

import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {HorizantolComponent} from './app/horizantol/horizantol.component';
import {LayoutComponent} from './app/layout/layout.component';
import {VerticalComponent} from './app/vertical/vertical.component';
import {ElementComponent} from './app/element/element.component';
import {register} from './app/layout/dynamic-layout.directive';


@NgModule({
  declarations: [

  ],
  imports: [
  ],
  providers: [
    // {provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE]},
    // {provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS},
    {provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false, showError: true}},

  ],
  exports: [],
  bootstrap: []
})
export class AbrarComponentsModule {
}


register("vertical", VerticalComponent)
register("Element", ElementComponent)
register("layout", LayoutComponent)
register("Horizontal" , HorizantolComponent)

