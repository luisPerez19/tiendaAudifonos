/*Resultados*/
let resultados = document.getElementById("resultados");


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
                <p>Este es el ID del producto: ${producto.id}</p>
                <p>Este es el inventatario del producto: ${producto.inventario}</p>
                <button id="${"boton" + producto.id}">+</button>
            </div>
            

        </div>
    </div>
    `;
});
