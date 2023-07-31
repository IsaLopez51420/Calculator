let addSymbol = (element) => {
    document.getElementById("screen").value += element;
}

let clearScreen = () => {
    document.getElementById("screen").value = "";
}

let calculate = () => {
    let operation = document.getElementById("screen").value;
    console.log(operation);
    let res = "E"; 
    
    
    let components = operation.split(/(\*-|\*+|\+|\-|\*|\/)/g);
    console.log(components);
    let result = Math.floor(components[0]);
    for (let i = 1; i < components.length; i += 2) {
      let operation = components[i];
      let operand = Math.floor(components[i + 1]);
      switch (operation) {
        case "+":
          result += operand;
          break;
        case "-":
          result -= operand;
          break;
        case "*":
          result *= operand;
          break;
        case "*-":
          result = result * -1 * operand;
          break;
        case "*+":
          result = operand;
          break;
        case "/":
          result /= operand;
          break;
        case "/-":
          result = result * -1 * operand;
          break;
        default:
          result = "E";
      }
    }
    console.log(result);
    document.getElementById("screen").value = result.toString();
  };


    //....



/*
    Lista de operaciones correctas:
    6+6 -> 12
    -6+6 -> 0
    +6-6 -> 0
    -9*-3 -> 27
    735*-9 -> un montón

    -6/-1 -> 6  ->   -6  |  /   |  -1  
    +3*-14 -> 

*/

/*
    NO SE PUEDE OPERAR CON DECIMALES

    Operaciones que NO se van a pdoer hacer

    3+5+6
    /9*3
    *3*3
    4-/3
    7 * / *6
    -*5
    +3
    -8

    >>>> "E"

*/