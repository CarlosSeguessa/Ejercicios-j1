// 8. Dos números un resultado
// • Realizar un programa que lea por teclado dos números, si el primero es
// mayor al segundo informar su suma y diferencia, en caso contrario informar
// el producto y la división del primero respecto al segundo.

const num1 = parseInt(prompt("Ingrese el primer número"));
const num2 = parseInt(prompt("Ingrese el segundo número"));

if (num1 > num2) {
    const suma = num1 + num2;
    const diferencia = num1 - num2;
    alert(`La suma es ${suma} y la diferencia es ${diferencia}`);
}else if (num1 < num2) {
    const producto = num1 * num2;
    const division = num1 / num2;
    alert(`El producto es ${producto} y la división es ${division}`);
}
