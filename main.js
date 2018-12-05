'use strict';

class Calculator {
  screenElement() {
    return document.getElementById("calculator-screen");
  }

  acClicked(event) {
    this.screenElement().value = "0";
  }

  operatorClicked(event) {
    this.numberClicked(event);
  }

  numberClicked(event) {
    var elem = this.screenElement();
    if (elem.value === "0") {
      elem.value = event.target.value;
    } else {
      elem.value = elem.value + event.target.value;
    }
  }

  equalsClicked(event) {
    var elem = this.screenElement();
    elem.value = eval(elem.value);
  }

  setupListeners() {
    let numbers = document.getElementsByClassName("number");
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].addEventListener("click", (e) => { this.numberClicked(e); });
    }

    let ac = document.getElementById("all-clear");
    ac.addEventListener("click", (e) => { this.acClicked(e); } );

    let equals = document.getElementById("equal-sign");
    equals.addEventListener("click", (e) => { this.equalsClicked(e); } );

    let operators = document.getElementsByClassName("operator");
    for (let i = 0; i < operators.length; i++) {
      operators[i].addEventListener("click", (e) => { this.operatorClicked(e); });
    }
  }

  main() {
    this.setupListeners();
  }
}


let calc = new Calculator();
calc.main();
