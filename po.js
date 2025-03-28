document.addEventListener("DOMContentLoaded", () => {
    const botonModoOscuro = document.getElementById("modoOscuro");
    
    botonModoOscuro.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro");
    });
});