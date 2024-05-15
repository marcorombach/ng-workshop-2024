import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { CalculatorComponent } from './calculator/calculator.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule } from '@angular/forms';


registerLocaleData(localeDe, 'de-DE', localeDeExtra);

@NgModule({
  declarations: [
    CalculatorComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class UtilsModule { }
