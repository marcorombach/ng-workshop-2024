import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { BookFilterPipe } from './books/book-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { UtilsModule } from './utils/utils.module';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFilterPipe,
    WelcomeComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UtilsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de-DE'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
