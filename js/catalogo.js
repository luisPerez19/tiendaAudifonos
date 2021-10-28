/*Resultados*/
let resultados = document.getElementById("resultados");

let contadorProductos;
let arregloProductos;

if (localStorage.getItem("productos") != null) {
    arregloProductos = JSON.parse(localStorage.getItem("productos"));
} else {
    arregloProductos = [];
} //localstorage solo guarda cadenas

if (localStorage.getItem("contadorProductos") != null) {
    contadorProductos = JSON.parse(localStorage.getItem("contadorProductos"));
} else {
    contadorProductos = 0;
}



resultados.innerHTML = "";

let productos;
if (localStorage.getItem("productos") != null) {
    productos = JSON.parse(localStorage.getItem("productos"));
} else {
    productos = [];
} //localstorage solo guarda cadenas

productos.forEach(producto => {
    resultados.innerHTML = resultados.innerHTML + `
    <div class="carta">
        <div class="imagen">
            <img src="${producto.urlImagen}" alt="">
        </div>
        <div class="descripcion">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <div class="agregar">
                <p class="precio">$${producto.precio}</p>

                <button id="${"boton" + producto.id}">+</button>
            </div>
            

        </div>
    </div>
    `;
});
