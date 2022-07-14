import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator-app',
  templateUrl: './calculator-app.component.html',
  styleUrls: ['./calculator-app.component.css']
})
export class CalculatorAppComponent implements OnInit {
  number1 = 0;
  number2 = 0;
  result = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum(number1: number, number2: number) {
    this.result = number1 + number2
  }
  tru(number1: number, number2: number) {
    this.result = number1 - number2
  }
  nhan(number1: number, number2: number) {
    this.result = number1 * number2
  }
  chia(number1: number, number2: number) {
    this.result = number1 / number2
  }
}
