// Se ingresan tres valores por teclado, si todos son
// iguales se imprime la suma del primero con el
// segundo y a este resultado se lo multiplica por el
// tercero (tener en cuenta que puede haber tres
// condiciones simples). En el caso que no sean
// iguales, solo indica que los números no son
// iguales
const btn = document.getElementById("btncalc");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", () => {
  const num1 = parseInt(document.getElementById("n1").value);
  const num2 = parseInt(document.getElementById("n2").value);
  const num3 = parseInt(document.getElementById("n3").value);

  if (num1 == num2 && num2 == num3 && num3 == num1) {
    const result = (num1 + num2) * num3;
    resultado.innerHTML = result;
  } else if (num1 != num2 || num2 != num3 || num3 != num1) {
    const result = "Los números no son iguales";
    resultado.innerHTML = result;
  }
});
