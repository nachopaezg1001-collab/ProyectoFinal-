const grid = document.getElementById("productGrid");

fetch("./data/productos.json")
  .then(res => res.json())
  .then(products => {
    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "productCard";

      card.innerHTML = `
        <a href="product.html?id=${p.id}">
          <img src="${p.imagen}" alt="${p.nombre}">
          <h3>${p.nombre}</h3>
        </a>
        <p>$${p.precio}</p>
        <button onclick="addToCart(${p.id})">🛒</button>
        <button onclick="addToFav(${p.id})">❤️</button>
      `;

      grid.appendChild(card);
    });
  });

// Buscador
const btn = document.getElementById("btnSearch");
const input = document.getElementById("searchInput");

btn.onclick = () => input.hidden = !input.hidden;

input.addEventListener("change", () => {
  const search = input.value.trim() || "default";
  window.location.href = `product.html?id=${search}`;
});

// MENU HAMBURGUESA
const menuToggle = document.getElementById("menuToggle");
const mobilePanel = document.getElementById("mobilePanel");

menuToggle.addEventListener("click", () => {
  mobilePanel.style.display =
    mobilePanel.style.display === "flex" ? "none" : "flex";
});

// Copiar contador de favoritos y carrito a mobile
function updateMobileCounts() {
  const favDesktop = document.getElementById("favCount").innerText;
  const cartDesktop = document.getElementById("cartCount").innerText;

  document.getElementById("favCountMobile").innerText = favDesktop;
  document.getElementById("cartCountMobile").innerText = cartDesktop;
}


const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function showSlide(i) {
  if (i < 0) index = slideElements.length - 1;
  else if (i >= slideElements.length) index = 0;
  else index = i;

  slides.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

// Opcional: auto slide
setInterval(() => showSlide(index + 1), 5000);

/* ==== Collapse personalizado estilo Arcadia ==== */
/* Pegar esto al final de js/main.js */

(function () {
  // Selecciona todos los botones de categorías
  const catBtns = document.querySelectorAll('.cat-btn');

  if (!catBtns.length) return;

  catBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const targetId = btn.getAttribute('data-target');
      const panel = document.getElementById(targetId);
      if (!panel) return;

      const isOpen = btn.classList.contains('open');

      // --- Cerrar todos (comportamiento acordeón: solo 1 abierto) ---
      document.querySelectorAll('.cat-btn.open').forEach(b => {
        if (b === btn) return;
        b.classList.remove('open');
        b.setAttribute('aria-expanded', 'false');
        const otherId = b.getAttribute('data-target');
        const otherPanel = document.getElementById(otherId);
        if (otherPanel) {
          otherPanel.classList.remove('active');
          otherPanel.style.maxHeight = null;
          otherPanel.setAttribute('aria-hidden', 'true');
        }
      });

      // --- Toggle actual ---
      if (isOpen) {
        // cerrar
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        panel.classList.remove('active');
        panel.style.maxHeight = null;
        panel.setAttribute('aria-hidden', 'true');
      } else {
        // abrir
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        panel.classList.add('active');
        // calcular altura para animación
        panel.style.maxHeight = panel.scrollHeight + 24 + "px"; // extra padding
        panel.setAttribute('aria-hidden', 'false');

        // opcional: desplazarse hasta el botón en móviles si está fuera de vista
        if (window.innerWidth < 600) {
          setTimeout(() => {
            btn.scrollIntoView({ block: 'center', behavior: 'smooth' });
          }, 220);
        }
      }
    });
  });

  // SI querés que la primera categoría esté abierta por defecto, descomenta:
  // setTimeout(() => { document.querySelector('.cat-btn').click(); }, 50);

})();



// Selección de elementos
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');

document.getElementById('openLogin').onclick = () => loginModal.style.display = 'flex';
document.getElementById('openRegister').onclick = () => registerModal.style.display = 'flex';

document.getElementById('closeLogin').onclick = () => loginModal.style.display = 'none';
document.getElementById('closeRegister').onclick = () => registerModal.style.display = 'none';

// Cambiar entre modales
document.getElementById('switchToRegister').onclick = () => {
  loginModal.style.display = 'none';
  registerModal.style.display = 'flex';
}

document.getElementById('switchToLogin').onclick = () => {
  registerModal.style.display = 'none';
  loginModal.style.display = 'flex';
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = e => {
  if(e.target === loginModal) loginModal.style.display = 'none';
  if(e.target === registerModal) registerModal.style.display = 'none';
}


const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if(query) {
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    }
});




