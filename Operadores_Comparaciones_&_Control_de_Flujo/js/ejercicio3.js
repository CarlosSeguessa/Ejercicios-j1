// 3. ¿Son Menores?

// Se ingresan por teclado tres números, si todos los valores ingresados son
// menores a 10, imprimir en la página la leyenda ' Todos los números son
// menores a diez'.
const num1 = parseInt(prompt("Introduce un numero"));
const num2 = parseInt(prompt("Introduce un numero"));
const num3 = parseInt(prompt("Introduce un numero"));

if (num1 < 10 && num2 < 10 && num3 < 10) {
  alert("Todos los numeros son menores a 10");
} else {
  alert("Alguno de los numeros es mayor a 10");
}
