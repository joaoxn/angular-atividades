import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent implements OnInit {
  display: string = '';
  displayHistory: string = '';

  ngOnInit(): void {
    document.addEventListener("keydown", (event) => this.inputKey(event.key))
  }

  inputNumber(num: number) {
    this.display += num;
  }

  inputOperator(operator: string) {
    this.display += ' ' + operator + ' ';
  }

  inputSpecial(input: string) {
    switch (input) {
      case '=':
        this.removeOperatorIfLast()
        this.repeatOperationIfNumberAlone()
        
        this.displayHistory = this.display + " =";
        this.display = String(eval(this.convertDisplay()));
        break;
      case 'C':
        this.clear();
        break;
    }
  }

  convertDisplay(): string {
    let displayCopy: string = this.display;
    displayCopy = displayCopy.replaceAll('×', '*');
    displayCopy = displayCopy.replaceAll('÷', '/');
    return displayCopy;
  }

  removeOperatorIfLast() {
    let beforeLast = this.display.at(-2)
    if (beforeLast == '+' || beforeLast == '-' || 
      beforeLast == '×' || beforeLast == '÷')
      this.display.substring(0, -2) // see if works
  }

  repeatOperationIfNumberAlone() {
    function includesAny(str: string, array: Array<string>): boolean {
      return array.some((elem) => str.includes(elem))
    }
    let operators = ['+', '-', '×', '÷']
    if (includesAny(this.display, operators))
      return;

    let dH = this.displayHistory
    let index = -1
    for (let i = 0; i < dH.length; i++) {
      if (includesAny(String(dH.at(i)), operators))
        index = i
    }

    this.display += dH.substring(index, -1)
  }

  clear() {
    if (this.display != '') this.displayHistory = this.display;
    this.display = '';
  }

  inputKey(key: string) {
    switch (key) {
      case '0': this.inputNumber(0); break;
      case '1': this.inputNumber(1); break;
      case '2': this.inputNumber(2); break;
      case '3': this.inputNumber(3); break;
      case '4': this.inputNumber(4); break;
      case '5': this.inputNumber(5); break;
      case '6': this.inputNumber(6); break;
      case '7': this.inputNumber(7); break;
      case '8': this.inputNumber(8); break;
      case '9': this.inputNumber(9); break;
      case '+': this.inputOperator('+'); break;
      case '-': this.inputOperator('-'); break;
      case 'x': this.inputOperator('×'); break;
      case '*': this.inputOperator('×'); break;
      case '×': this.inputOperator('×'); break;
      case '÷': this.inputOperator('÷'); break;
      case '/': this.inputOperator('÷'); break;
      case '.': this.inputSpecial('.'); break;
      case ',': this.inputSpecial('.'); break;
      case 'e': this.inputSpecial('e'); break;
      case '=': this.inputSpecial('='); break;
      case 'Enter': this.inputSpecial('='); break;
      case 'Delete': this.inputSpecial('C'); break;
      case 'Backspace': this.inputSpecial('C'); break;
      case 'Escape': this.inputSpecial('C'); break;
    }
  }
}
