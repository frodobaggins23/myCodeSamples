var number1 = "";
var number2 = "";
var action = "";
var operatorSelected = false;
var memoryOn = false;

function debugMe() {
  console.log("number1=" + number1);
  console.log("number2=" + number2);
  console.log("action=" + action);
  console.log("operatorSelected=" + operatorSelected);
  console.log("memoryOn=" + memoryOn);
  console.log("-----------------------------");
}

for (i = 0; i < document.getElementsByTagName("button").length; i++) {
  var button = document.getElementsByTagName("button");
  button[i].addEventListener("click", function() {
    // operator
    if (this.className == "key--operator") {
      if (number1 === "") {
        return false;
      }

      operatorSelected = true;
      if (action == "calculate") {
        memoryOn = true;
      }
      action = this.getAttribute("data-action");

      if (action == "clear") {
        number1 = "";
        number2 = "";
        action = "";
        operatorSelected = false;
        memoryOn = false;
        document.getElementsByClassName("calculator__display")[0].innerHTML =
          "0";
      }

      debugMe();
      return false;
    }

    //vypocet
    if (this.className == "key--equal") {
      //console.log("=");
      if (action == "add") {
        var result = parseFloat(number1) + parseFloat(number2);
        console.log(result);
        document.getElementsByClassName(
          "calculator__display"
        )[0].innerHTML = result;
      } else if (action == "subtract") {
        var result = parseFloat(number1) - parseFloat(number2);
        document.getElementsByClassName(
          "calculator__display"
        )[0].innerHTML = result;
      } else if (action == "multiply") {
        var result = parseFloat(number1) * parseFloat(number2);
        document.getElementsByClassName(
          "calculator__display"
        )[0].innerHTML = result;
      } else if (action == "divide") {
        var result = parseFloat(number1) / parseFloat(number2);
        document.getElementsByClassName(
          "calculator__display"
        )[0].innerHTML = result;
      } else {
        return false;
      }

      number1 = result;
      number2 = "";
      //console.log("number1="+number1);
      //console.log("number2="+number2);

      operatorSelected = false;

      action = this.getAttribute("data-action");

      debugMe();
      return false;
    }

    //chybove hlasky - kontrola pred vypocty
    if (operatorSelected == false && action == "calculate") {
      return false;
    }

    // zaznamenavani a vypisovani hodnot

    var selectedValue = this.innerHTML;

    if (operatorSelected == false) {
      number1 = number1 + selectedValue;
      document.getElementsByClassName(
        "calculator__display"
      )[0].innerHTML = number1;
      //console.log("number1");
    } else {
      number2 = number2 + selectedValue;
      document.getElementsByClassName(
        "calculator__display"
      )[0].innerHTML = number2;
      //console.log("number2");
    }
    debugMe();
  });
}
