let botonesProductos = document.querySelectorAll("button");

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

botonesProductos.forEach(boton => {
    boton.addEventListener("click", function(evento) {
        evento.preventDefault();

        idBoton = Number(boton.id.substr(5, boton.id.length));
        console.log("Apretaste el boton:", Number(boton.id.substr(5, boton.id.length)));

        for (let i = 0; i < arregloProductos.length; i++) {
            if (arregloProductos[i].id == idBoton) {
                console.log(arregloProductos[i].nombre);
                console.log(arregloProductos[i].inventario);
                
            }
        }


    })
});


