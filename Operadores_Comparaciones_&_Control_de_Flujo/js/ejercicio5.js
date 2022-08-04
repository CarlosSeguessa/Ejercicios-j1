//Notas de Alumnos
const nota1 = parseInt(prompt("introduzca primera nota"));
const nota2 = parseInt(prompt("introduzca segunda nota"));
const nota3 = parseInt(prompt("introduzca tercer nota"));

const promedio = Math.floor((nota1 + nota2 + nota3) / 3);

if (promedio >= 7) {
  alert(`Promocionado con: ${promedio}`);
} else {
  alert("No aprobado");
}
