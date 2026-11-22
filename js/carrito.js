import { obtenerCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const containerCarrito = document.getElementById("container-carrito");
    const divAcciones = document.getElementById("acciones-carrito");

    contenedor.innerHTML = "";
    divacciones.innerHTML = "";


     if (carrito.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.classList.add("mensaje-carrito-vacio");
    mensaje.textContent = "Tu carrito está vacío. Agrega productos para continuar.";

    contenedor.appendChild(mensaje);

    return;
   }

   carrito.forEach((producto, index) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-carrito");

    const img = document.createElement("img");
    img.src = `../${producto.imagen}`;
    img.alt = producto.nombre;

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio}`;

    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("botomn-eliminar");
    botonEliminar.classList.add = ("boton-eliminar-carrito");
    botonEliminar.textContent = "Eliminar producto";

    botonEliminar.addEventListener("click", () => {
        eliminarProducto(index);
        renderizarCarrito();
    });


    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(botonEliminar);

    contenedor.appendChild(tarjeta);
})



 const botonVaciar = document.createElement("button");
 botonVaciar.classList.add("boton-vaciar");
 botonVaciar.classList.add("boton-vaciar-carrito");
 botonVaciar.textContent = "Vaciar carrito";

 botonVaciar.addEventListener("click", () => {
 vaciarCarrito();
 renderizarCarrito();
 })


 divAcciones.appendChild(botonVaciar);

}

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();

})
