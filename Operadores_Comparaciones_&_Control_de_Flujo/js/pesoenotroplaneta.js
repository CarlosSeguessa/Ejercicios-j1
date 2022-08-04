// programa para saber cuanto pesas en otro planeta
const g_tierra = 9.8;
const g_mercurio = 3.7;
const g_venus = 8.87;
const g_marte = 3.711;
const g_jupiter = 28.4;
const g_saturno = 10.44;
const g_urano = 8.7;
const g_neptuno = 11.15;
const g_pluton = 0.62;

const btn = document.getElementById("calcular");

btn.addEventListener("click", () => {
  const p = document.getElementById("peso");
  const peso = parseInt(p.value);
  const planeta = document.getElementById("planets");
  const planetvalue = planeta.value;
  if (planetvalue == 1) {
    const pesoenmercurio = (g_mercurio * peso) / g_tierra;
    alert(`Tu peso en Mercurio es ${Math.floor(pesoenmercurio)} Kg`);
  } else if (planetvalue == 2) {
    const pesoenvenus = (g_venus * peso) / g_tierra;
    alert(`Tu peso en Venus es ${Math.floor(pesoenvenus)} Kg`);
  } else if (planetvalue == 3) {
    const pesoenmarte = (g_marte * peso) / g_tierra;
    alert(`Tu peso en Marte es ${Math.floor(pesoenmarte)} Kg`);
  } else if (planetvalue == 4) {
    const pesoenjupiter = (g_jupiter * peso) / g_tierra;
    alert(`Tu peso en Jupiter es ${Math.floor(pesoenjupiter)} Kg`);
  } else if (planetvalue == 5) {
    const pesoensaturno = (g_saturno * peso) / g_tierra;
    alert(`Tu peso en Saturno es ${Math.floor(pesoensaturno)} Kg`);
  } else if (planetvalue == 6) {
    const pesoenurano = (g_urano * peso) / g_tierra;
    alert(`Tu peso en Urano es ${Math.floor(pesoenurano)} Kg`);
  } else if (planetvalue == 7) {
    const pesoenneptuno = (g_neptuno * peso) / g_tierra;
    alert(`Tu peso en Neptuno es ${Math.floor(pesoenneptuno)} Kg`);
  } else if (planetvalue == 8) {
    const pesoenpluton = (g_pluton * peso) / g_tierra;
    alert(`Tu peso en Pluton es ${Math.floor(pesoenpluton)} Kg`);
  }
});
