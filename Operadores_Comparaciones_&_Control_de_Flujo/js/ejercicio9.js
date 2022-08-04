// 10. ¿Cuál es Mayor?
// • Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor
// de ellos.

const num1 = parseInt(prompt("Ingrese el primer número"));
const num2 = parseInt(prompt("Ingrese el segundo número"));
const num3 = parseInt(prompt("Ingrese el tercer número"));

    if (num1 > num2 && num1 > num3) {
        alert(`El número ${num1} es mayor`);
    }else if (num2 > num1 && num2 > num3) {
        alert(`El número ${num2} es mayor`);
    }else if (num3 > num1 && num3 > num2) {
        alert(`El número ${num3} es mayor`);
    }
