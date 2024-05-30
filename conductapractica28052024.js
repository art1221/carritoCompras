var carro = [];
var spTotal = document.getElementById("total");
var listaCarro = document.getElementById("carrito");
var carroSinRepetidos = [];
Productos();

function Productos(){
    var objProducto = {
        id : 1,
        nombre :"Producto 1",
        precio : 375,
        cantidad : 0,
        };
        carroSinRepetidos.push(objProducto);
        var objProducto = {
            id : 2,
            nombre :"Producto 2",
            precio : 475,
            cantidad : 0,
        };
        carroSinRepetidos.push(objProducto);
        var objProducto = {
            id : 3,
            nombre :"Producto 3",
            precio : 575,
            cantidad : 0,
        };
        carroSinRepetidos.push(objProducto);
}

function agregarCarro1(){
    carroSinRepetidos[0].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}
function agregarCarro2(){
    carroSinRepetidos[1].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}
function agregarCarro3(){
    carroSinRepetidos[2].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}
function calcularTotal(){
    var elTotal = 0;
    for(var p of carroSinRepetidos)
    {
        elTotal+= p.precio*p.cantidad;
    }
    spTotal.textContent = elTotal;
}
function mostrarEnCarro(){
    listaCarro.textContent = "";
    for(var objP of carroSinRepetidos)
    {
        if(objP.cantidad > 0)
        {
            var nodoProductoEnCarro = document.createElement("li");
            nodoProductoEnCarro.classList.add("list-group-item","text-right","mx-2");
            nodoProductoEnCarro.textContent = objP.cantidad + " - " + objP.nombre + " - $" + objP.precio;
            listaCarro.appendChild(nodoProductoEnCarro);
        }
    }
}
