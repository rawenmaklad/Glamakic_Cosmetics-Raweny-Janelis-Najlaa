// -------------------------------------------------
// TRANSICIÓN SOLO EN DOS BOTONES ESPECÍFICOS
// -------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

    // Selecciona los botones por su ID o clase
    const botonLogin = document.querySelector("#btn-login");
    const botonCarrito = document.querySelector("#btn-carrito");

    // Función que hace la transición
    function activarTransicion(boton) {
        if (!boton) return;

        boton.addEventListener("click", function (e) {
            e.preventDefault(); // Evita que cambie de página de inmediato

            // Activa la animación
            document.body.classList.add("page-transition");

            // Redirige después del efecto
            setTimeout(() => {
                window.location.href = this.href;
            }, 400); // debe coincidir con el CSS
        });
    }

    activarTransicion(botonLogin);
    activarTransicion(botonCarrito);
});