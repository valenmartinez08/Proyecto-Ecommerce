import {
    guardarCarrito,
    obtenerCarrito,
    vaciarCarritoStorage,
} from "./storage.js";


import { actualizarContador, mostrarMensaje } from "./utils.js";

export const agregarAlCarrito = () => {
const carrito = obtenerCarrito();
carrito.push(producto);

gaurdarCarrito(carrito);

actualizarContador(carrito);
mostrarMensaje("Producto agregado al carrito");
}

export const eliminarProducto = (indice) => {
const carrito = obtenerCarrito();
carrito.splice(indice, 1);

gaurdarCarrito(carrito);

actualizarContador(carrito);
mostrarMensaje("Producto eliminado del carrito");
}

export const vaciarCarrito = () => {
vaciarCarritoStorage();
actualizarContador([]);
mostrarMensaje("Carrito vaciado");
}

