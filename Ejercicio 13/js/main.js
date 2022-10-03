const number1 = prompt("Introduce el primer número");
const num1Int = parseInt(number1);

const number2 = prompt("Introduce el segundo número");
const num2Int = parseInt(number2);

const oper = prompt("Introduce el tipo de operación");

switch (oper) {
    case "+":
        alert(num1Int + num2Int);
        break;
    case "-":
        alert(num1Int - num2Int);
        break;
    case "*":
        alert(num1Int * num2Int);
        break;
    case "/":
        alert(num1Int / num2Int);
        break;
    case "^":
        alert(num1Int ^ num2Int);
        break;
    case "%":
        alert(num1Int % num2Int);
        break;
    default:
        alert("No es una operación registrada");
        break;
}
