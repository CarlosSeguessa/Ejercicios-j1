// programa que pida cargar una fecha cualquiera, luego verificar si dicha fecha coorresponde a Navidad

const navidad = [12, 24];

btn.addEventListener("click", () => {
  const date = document.getElementById("fecha");
  const fecha = date.value;
  const fechaArray = fecha.split("-");
  const dia = fechaArray[2];
  const mes = fechaArray[1];
  if (mes == navidad[0] && dia == navidad[1]) {
    alert("Felicidades!!! Es navidad");
  } else {
    alert("No es navidad");
  }
});
