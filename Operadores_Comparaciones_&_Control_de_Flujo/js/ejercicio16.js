// 16. Máquina expendedora
// • PRECONDICIÓN:
// ○ La máquina cuenta con 30 monedas de 10 y 50 monedas de 5.
// ○ El precio de todos los productos es múltiplo de 5
// ○ La máquina soporta solo billetes uruguayos (50, 100, 200, 500, 1.000,2.000)
// • Se ingresa el valor del producto (múltiplo de 5).
// • Se ingresa el dinero entregado en la máquina.
// • Se debe imprimir cuantas monedas de 10 y cuántas de 5 hay que entregar.
// • En caso que el cambio no alcance se imprime “no hay cambio suficiente”

// ○ La máquina cuenta con 30 monedas de 10 y 50 monedas de 5.




const entregarDinero = () => {
    let t = document.getElementById('dinero');
    dinero = parseInt(t.value);
    for (let bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            entregado.push(new Monedas(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if (dinero > 0) {
        resultado.innerHTML = "no hay cambio suficiente";
    }else {
        for (let e of entregado) {
            if (e.cantidad > 0) {
                resultado.innerHTML += e.cantidad + " monedas de $:" + e.valor + "<br />";
            }
        }
    }
}

let caja = [];
var entregado = [];
caja.push(new Monedas(10, 30));
caja.push(new Monedas(5, 50));
let dinero = 0;
let div = 0;
let papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);