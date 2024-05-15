import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { CalculatorComponent } from './utils/calculator/calculator.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full' // ansonten matched es bereits wenn der Pfad mit / anfängt
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'calc',
    component: CalculatorComponent
  },
  {
    path: '**',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
