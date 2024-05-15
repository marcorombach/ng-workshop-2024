import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CalculatorComponent } from './calculator/calculator.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalculatorComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    RatingComponent,
    CalculatorComponent
  ],
  providers: [],
  bootstrap: []
})
export class UtilsModule { }
