import { Component } from '@angular/core';

@Component({
  selector: 'book-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  result = '';
  x = '';
  y = '';


  getX(){
    return parseInt(this.x) || 0;
  }

  getY(){
    return parseInt(this.y) || 0;
  }

  getResult(){
    return parseInt(this.result) || 0;
  }

  add(){
    this.result = (this.getX() + this.getY()).toString();   
  }

  sub(){
    this.result = (this.getX() - this.getY()).toString();

  }

  clear(){
    this.result = '';
    this.x = '';
    this.y = '';
  }

}
