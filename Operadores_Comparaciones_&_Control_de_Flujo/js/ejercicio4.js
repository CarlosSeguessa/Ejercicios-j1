// 4. Dia de aumentos

const sueldo = parseInt(prompt("Ingrese su sueldo"));
const antiguedad = parseInt(prompt("Ingrese su antigüedad"));

if (sueldo < 500 && antiguedad >= 10) {
  const porcentaje = (sueldo * 20) / 100;
  const sueldoFinal = sueldo + porcentaje;
  alert(`El sueldo final es ${sueldoFinal}`);
} else if (sueldo < 500 && antiguedad < 10) {
  const porcentaje = (sueldo * 5) / 100;
  const sueldoFinal = sueldo + porcentaje;
  alert(`El sueldo final es ${sueldoFinal}`);
} else if (sueldo >= 500) {
  alert(`El sueldo final es ${sueldo}`);
}
