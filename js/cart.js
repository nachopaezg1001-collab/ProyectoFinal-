function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").textContent = cart.length;
}

updateCartBadge();

// Método de pago
function procesarPago() {
    // Obtener valores de inputs de pago
    const nombreTarjeta = document.querySelector("#cardName")?.value.trim();
    const numeroTarjeta = document.querySelector("#cardNumber")?.value.trim();
    const expiracion = document.querySelector("#cardExpiry")?.value.trim();
    const cvv = document.querySelector("#cardCVV")?.value.trim();

    // Validaciones simples
    if (!nombreTarjeta || !numeroTarjeta || !expiracion || !cvv) {
        alert("Por favor completa todos los campos de la tarjeta.");
        return;
    }

    if (!/^\d{16}$/.test(numeroTarjeta.replace(/\s+/g, ""))) {
        alert("Número de tarjeta inválido. Debe tener 16 dígitos.");
        return;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
        alert("CVV inválido.");
        return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiracion)) {
        alert("Fecha de expiración inválida. Formato MM/AA.");
        return;
    }

    // Calcular total del carrito
    const carrito = JSON.parse(localStorage.getItem("cart")) || [];
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0).toFixed(2);

    // Simular pago
    setTimeout(() => {
        alert(`Pago realizado con éxito!\nTotal: $${total}\nGracias por tu compra, ${nombreTarjeta}.`);
        // Vaciar carrito
        localStorage.removeItem("cart");
        // Opcional: redirigir a página de gracias o index
        window.location.href = "index.html";
    }, 800);
}

// Ejemplo: vincular el botón de pago
document.querySelector("#payButton")?.addEventListener("click", procesarPago);
