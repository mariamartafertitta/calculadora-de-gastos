let gastosMensuales = [];

let categoriaGastoAgregado;
let montoGastoAgregado;


do {
    categoriaGastoAgregado = prompt("Ingresa la categoria que queres registrar. Para salir escribi SALIR");

    if (categoriaGastoAgregado.toUpperCase() !== "SALIR") {
        montoGastoAgregado = parseInt(prompt("Ingresa el gasto que qures registrar"));

        let gastoAgregado = {
            categoria: categoriaGastoAgregado,
            monto: montoGastoAgregado,
        }
        gastosMensuales.push(gastoAgregado);
        console.log(gastosMensuales);
    }

} while (categoriaGastoAgregado.toUpperCase() !== "SALIR");


function calcularTotalGastos (){
    let total = gastosMensuales.reduce((acc, gasto) => acc + gasto.monto, 0);
    return total;
}

console.log("Total de gastos al mes",calcularTotalGastos());