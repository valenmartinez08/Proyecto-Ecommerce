import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./utils.js";

document .addEventListener ("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
});
