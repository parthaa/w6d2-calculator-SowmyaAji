function numberClicked(event) {
//  alert("number clicked" + event.target.value);
  var elem = screenElement();
  elem.value = elem.value + event.target.value;
}

function screenElement() {
  return document.getElementById("calculator-screen");
}

function acClicked(event) {
  screenElement().value = "0";
}

function main() {
  let numbers = document.getElementsByClassName("number");
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", numberClicked);
  }

  let ac = document.getElementById("all-clear");
  ac.addEventListener("click", acClicked);
}

main()
