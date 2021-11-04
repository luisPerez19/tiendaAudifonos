/*Inputs*/
let datosNombre = document.getElementById("nombre");
let datosPrecio = document.getElementById("precio");
let datosDept = document.getElementById("dept");
let datosDescripcion = document.getElementById("descripcion");
let datosImagen = document.getElementById("urlImagen");
let datosInventario = document.getElementById("inventario");
/*Botones*/
// let btnMostrar = document.getElementById("btnMostrar");
// let btnBorrarPrimero = document.getElementById("btnBorrarPrimero");
// let btnRegistrarInicio = document.getElementById("btnRegistrarInicio");
// let btnOrdenarD = document.getElementById("btnOrdenarD");
let btnBorrarUltimo = document.getElementById("btnBorrarUltimo");
let btnRegistrarFinal = document.getElementById("btnRegistrarFinal");
let btnBorrarRegistros = document.getElementById("btnBorrarRegistros");
let btnOrdenarA = document.getElementById("btnOrdenarA");


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


// btnMostrar.onclick = function(evento) {
//     evento.preventDefault();
//     resultados.innerHTML = "";

//     let productos;
//     if (localStorage.getItem("productos") != null) {
//         productos = JSON.parse(localStorage.getItem("productos"));
//     } else {
//         productos = [];
//     } //localstorage solo guarda cadenas
    
//     productos.forEach(producto => {
//         resultados.innerHTML = resultados.innerHTML + `
//         <ul>
//             <li>ID: ${producto.id}</li>
//             <li>Nombre: ${producto.nombre}</li>
//             <li>Precio: ${producto.precio}</li>
//             <li>Departamento: ${producto.dept}</li>
//         </ul>
//         `;
//     });
// }

btnRegistrarFinal.addEventListener("click", function(evento) {
    evento.preventDefault();

    let nombre = datosNombre.value;
    let precio = datosPrecio.value;
    let dept = datosDept.value;
    let descripcion = datosDescripcion.value;
    let urlImagen = datosImagen.value;
    let inventario = datosInventario.value;


    if (nombre.length > 0 && precio.length > 0 && dept.length > 0 && descripcion.length > 0 && urlImagen.length > 0 && inventario.length > 0 ) {
        let nuevoProducto = new Producto(contadorProductos, nombre, precio, dept, descripcion, urlImagen, inventario);

        arregloProductos.push(nuevoProducto);
        contadorProductos++;
        console.log("Producto registrado con exito!");
    
        localStorage.setItem("productos", JSON.stringify(arregloProductos))
        localStorage.setItem("contadorProductos", JSON.stringify(contadorProductos))
        console.log("Producto agregado a la base de datos");
    } else {
        alert("Por favor llena todos los campos")
    }  
})

// btnRegistrarInicio.addEventListener("click", function(evento) {
//     evento.preventDefault();

//     let nombre = datosNombre.value;
//     let precio = datosPrecio.value;
//     let dept = datosDept.value;


//     if (nombre.length > 0 && precio.length > 0 && dept.length > 0 ) {
//         let nuevoProducto = new Producto(contadorProductos, nombre, precio, dept);
//         arregloProductos.unshift(nuevoProducto);
//         contadorProductos++;
//         console.log("Producto registrado con exito!");
//         localStorage.setItem("productos", JSON.stringify(arregloProductos))
//         localStorage.setItem("contadorProductos", JSON.stringify(contadorProductos))
//         console.log("Producto agregado a la base de datos");
//     } else {
//         alert("Por favor llena todos los campos")
//     }  
// })

// btnBorrarPrimero.onclick = function(evento) {
//     evento.preventDefault();
    
//     arregloProductos.shift();
//     console.log("Ultimo elemento eliminado");

//     localStorage.setItem("productos", JSON.stringify(arregloProductos))
//     console.log("Primer eliminado a la base de datos");
// }

btnBorrarUltimo.onclick = function(evento) {
    evento.preventDefault();
    

    arregloProductos.pop();
    console.log("Ultimo elemento eliminado");

    localStorage.setItem("productos", JSON.stringify(arregloProductos))
    console.log("Producto eliminado a la base de datos");
}

btnBorrarRegistros.onclick = function(evento) {
    evento.preventDefault();
    
    arregloProductos = [];
    contadorProductos = 0;
    console.log("Registros eliminados");

    localStorage.setItem("productos", JSON.stringify(arregloProductos))
    localStorage.setItem("contadorProductos", JSON.stringify(contadorProductos))
    alert("Todos los registros eliminados");
}

btnOrdenarA.onclick = function(evento) {
    evento.preventDefault();
    
    arregloProductos.sort((a, b) => a.id - b.id);
    console.log("Registros ordenados");

    localStorage.setItem("productos", JSON.stringify(arregloProductos))
    console.log("Todos los registros ordenados");
}

// btnOrdenarD.onclick = function(evento) {
//     evento.preventDefault();
    
//     arregloProductos.sort((a, b) => b.id - a.id);
//     console.log("Registros ordenados");

//     localStorage.setItem("productos", JSON.stringify(arregloProductos))
//     console.log("Todos los registros ordenados");
// }


//Constructor del producto
function Producto(id, nombre, precio, dept, descripcion, urlImagen, inventario) { //Constructor de clase
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.dept = dept;
    this.descripcion = descripcion;
    this.urlImagen = urlImagen;
    this.inventario = inventario;
}

