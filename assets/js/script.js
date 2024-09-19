let listaNombreGastos = [];
let listaMontoGastos = [];


function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;  //metodo camel case
    let valor_gasto = document.getElementById('valorGasto').value; //metodo snake case

    listaNombreGastos.push(nombreGasto);
    listaMontoGastos.push(valor_gasto);

    //console.log(listaNombreGastos);
    //console.log(valor_gasto);  
    //alert('Click de usuario');
    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalMontoGastos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombreGastos.forEach((elemento,posicion) => {
        const valorGasto = Number(listaMontoGastos[posicion]);

        htmlLista += `<li> ${elemento} - USD ${valorGasto.toFixed(2)}
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);
    });

    listaElementos.innerHTML = htmlLista;
    totalMontoGastos.innerHTML = totalGastos.toFixed(2);

    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value = "";  
    document.getElementById('valorGasto').value = "";
}

function eliminarGasto(posicion){
    listaNombreGastos.splice(posicion,1);
    listaMontoGastos.splice(posicion,1);
    actualizarListaGastos();
}