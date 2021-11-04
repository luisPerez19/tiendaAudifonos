/*Resultados*/
let resultadosCarrito = document.getElementById("resultadosCarrito");
let cantidadTotal = document.getElementById("total");

resultadosCarrito.innerHTML = "";
cantidadTotal.innerHTML = 0;

let productosCarrito;
let total = 0;

if (localStorage.getItem("carritoProductos") != null) {
    productosCarrito= JSON.parse(localStorage.getItem("carritoProductos"));
} else {
    productosCarrito = [];
} //localstorage solo guarda cadenas

productosCarrito.forEach(producto => {
    total = total + Number(producto.precio)*producto.cantidad;

    resultadosCarrito.innerHTML = resultadosCarrito.innerHTML + `
    <div class="articulo">
        <div class="imagen">
            <img src="${producto.urlImagen}" alt="">
        </div>
        <div class="descripcion">
            <h3>${producto.nombre}</h3>
            <p><span>Departemento:</span> ${producto.dept}</p>
            <div class="numeroArticulos">
                <p class="precio">$${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
            </div>
            

        </div>
    </div>
    `;
});

cantidadTotal.innerHTML = `
        <p>Total: ${total}</p>
`;
