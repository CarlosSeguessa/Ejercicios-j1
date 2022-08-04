// 9. ¿Uno o dos dígitos?
// • Se ingresa por teclado un número positivo de uno o dos dígitos (1..99)
// mostrar un mensaje indicando si el número tiene uno o dos dígitos (recordar
// de convertir a entero con parseInt para preguntar posteriormente por una
// variable entera). Tener en cuenta qué condición debe cumplirse para tener
// dos dígitos un número entero.

const num1 = parseInt(prompt("Ingrese un número"));

if (num1.toString().length == 1) {
    alert(`El número ${num1} tiene un dígito`);
}else if (num1.toString().length == 2) {
    alert(`El número ${num1} tiene dos dígitos`);
}else if (num1.toString().length > 2) {
    alert(`El número ${num1} tiene más de dos dígitos`);
}



