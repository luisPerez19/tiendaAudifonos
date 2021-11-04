let botonesProductos = document.querySelectorAll("button");

console.log(botonesProductos);
let carritoProductos;

if (localStorage.getItem("productos") != null) {
    arregloProductos = JSON.parse(localStorage.getItem("productos"));
} else {
    arregloProductos = [];
} //localstorage solo guarda cadenas

if (localStorage.getItem("carritoProductos") != null) {
    carritoProductos = JSON.parse(localStorage.getItem("carritoProductos"));
} else {
    carritoProductos = [];
}

botonesProductos.forEach(boton => {
    boton.addEventListener("click", function(e) {
        e.preventDefault();

        existe = false;
        idBoton = Number(boton.id.substr(5, boton.id.length));
        console.log("Apretaste el boton:", Number(boton.id.substr(5, boton.id.length)));

        for (let i = 0; i < arregloProductos.length; i++) {
            
            if (arregloProductos[i].id == idBoton) {

                if (arregloProductos[i].inventario <= 0) {
                    alert("Ya no tenemos este articulo")
                } else {
                    if (carritoProductos.length == 0) {
                        //delete arregloProductos[i].inventario;
                        //delete arregloProductos[i].descripcion;
                        arregloProductos[i].cantidad = 0;
                        carritoProductos.push(arregloProductos[i]);

                        localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos))
                        console.log("no existe y es el primer articulo ingresado el carrito");
                    } else {

                        for (let j = 0; j < carritoProductos.length; j++) {
                            if (arregloProductos[i].id == carritoProductos[j].id) {
                                console.log("Si existe en el carrito")
                                arregloProductos[i].inventario = arregloProductos[i].inventario - 1; 
                                carritoProductos[j].cantidad = carritoProductos[j].cantidad + 1;
                                localStorage.setItem("productos", JSON.stringify(arregloProductos));
                                localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos));
                                existe = true
                                console.log("si existe");
                            }
                            else if (arregloProductos[i].id != carritoProductos[j].id && j == carritoProductos.length - 1 && existe == false) {
                                //delete arregloProductos[i].inventario;
                                //delete arregloProductos[i].descripcion;
                                arregloProductos[i].cantidad = 0;
                                carritoProductos.push(arregloProductos[i]);

                                localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos))
                                console.log("no existe en el carrito");
                            }

                        }
                    }
                    

                }

                
                // delete arregloProductos[i].inventario;
                // delete arregloProductos[i].descripcion;
                // arregloProductos[i].cantidad = 1;
                // carritoProductos.push(arregloProductos[i]);

                // localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos))
            }
        }


    })
});

