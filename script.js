/* =========================================================
   OmniShop — prototipo v0.1 · script.js
   Funciona en dos páginas: index.html (catálogo)
   y carrito.html (página propia del carrito).
   ========================================================= */
const MONEDA = '$';
const ENVIO_GRATIS = 99;
const ENVIO = 9.99;

const PRODUCTOS = [
  { id: 'gpu-5070ti', nombre: 'RTX 5070 Ti 16GB', marca: 'NVIDIA', cat: 'GPUs', precio: 899, antes: 1049, rating: 4.8, stock: 14, dest: true, specs: ['Memoria', '16 GB GDDR7', 'Chip', 'Blackwell · 8,960 núcleos CUDA', 'Boost', '2,850 MHz', 'Consumo', '300 W', 'Extras', 'DLSS 4 + Ray Tracing', 'Conector', 'PCIe 5.0 · 16 pines'], art: 'gpu' },
  { id: 'gpu-4060', nombre: 'RTX 4060 8GB', marca: 'NVIDIA', cat: 'GPUs', precio: 299, antes: 339, rating: 4.6, stock: 32, dest: false, specs: ['Memoria', '8 GB GDDR6', 'Chip', 'Ada Lovelace · 3,072 núcleos', 'Boost', '2,445 MHz', 'Consumo', '115 W', 'Extras', 'DLSS 3 + Frame Generation'], art: 'gpu' },
  { id: 'cpu-7800x3d', nombre: 'Ryzen 7 7800X3D', marca: 'AMD', cat: 'CPUs', precio: 369, antes: 449, rating: 4.9, stock: 21, dest: true, specs: ['Núcleos / Hilos', '8 / 16', 'Caché', '96 MB L3 (3D V-Cache)', 'Frecuencia', '4.2 / 5.0 GHz', 'Socket', 'AM5', 'TDP', '120 W', 'Extras', 'Ideal para gaming'], art: 'cpu' },
  { id: 'cpu-7600', nombre: 'Ryzen 5 7600', marca: 'AMD', cat: 'CPUs', precio: 199, antes: 219, rating: 4.7, stock: 40, dest: false, specs: ['Núcleos / Hilos', '6 / 12', 'Caché', '32 MB L3', 'Frecuencia', '3.8 / 5.1 GHz', 'Socket', 'AM5', 'TDP', '65 W'], art: 'cpu' },
  { id: 'ram-vengeance', nombre: 'Vengeance 32GB DDR5 6000', marca: 'Corsair', cat: 'Memoria y SSD', precio: 109, antes: 129, rating: 4.8, stock: 48, dest: false, specs: ['Capacidad', '2 × 16 GB', 'Velocidad', '6,000 MT/s CL30', 'Compatibilidad', 'AMD EXPO · Intel XMP 3.0', 'Extras', 'RGB direccionable', 'Voltaje', '1.35 V'], art: 'ram' },
  { id: 'ssd-990', nombre: '990 EVO Plus 1TB NVMe', marca: 'Samsung', cat: 'Memoria y SSD', precio: 89, antes: 109, rating: 4.7, stock: 55, dest: false, specs: ['Capacidad', '1 TB', 'Interfaz', 'PCIe 4.0 x4 · M.2 2280', 'Lectura', 'Hasta 7,000 MB/s', 'Escritura', 'Hasta 6,000 MB/s', 'Garantía', '5 años'], art: 'ssd' },
  { id: 'lap-rog', nombre: 'ROG Strix G16', marca: 'ASUS', cat: 'Portátiles', precio: 1249, antes: 1399, rating: 4.8, stock: 9, dest: true, specs: ['Procesador', 'Intel Core i7-13650HX', 'GPU', 'RTX 4060 8GB', 'RAM', '16 GB DDR5', 'Almacenamiento', '1 TB SSD', 'Pantalla', '16" FHD+ 165Hz', 'Extras', 'Teclado RGB · Wi-Fi 6E'], art: 'laptop' },
  { id: 'lap-ideapad', nombre: 'IdeaPad Slim 5', marca: 'Lenovo', cat: 'Portátiles', precio: 649, antes: 719, rating: 4.5, stock: 17, dest: false, specs: ['Procesador', 'AMD Ryzen 7 7735HS', 'GPU', 'Radeon integrada', 'RAM', '16 GB DDR5', 'Almacenamiento', '512 GB SSD', 'Pantalla', '15.6" FHD IPS', 'Peso', '1.6 kg'], art: 'laptop' },
  { id: 'mon-27qhd', nombre: 'Monitor 27" QHD 165Hz', marca: 'LG', cat: 'Monitores', precio: 279, antes: 319, rating: 4.6, stock: 26, dest: true, specs: ['Panel', 'IPS · 2,560 × 1,440', 'Tasa de refresco', '165 Hz', 'Tiempo de respuesta', '1 ms', 'HDR', 'HDR10', 'Extras', 'G-Sync compatible · 99% sRGB'], art: 'monitor' },
  { id: 'mon-34uw', nombre: 'Monitor 34" Ultrawide 144Hz', marca: 'Xiaomi', cat: 'Monitores', precio: 449, antes: 499, rating: 4.4, stock: 12, dest: false, specs: ['Panel', 'VA · 3,440 × 1,440', 'Relación', '21:9 curvo', 'Tasa de refresco', '144 Hz', 'HDR', 'HDR400', 'Extras', 'USB-C 65W · altavoces'], art: 'monitor' },
  { id: 'mon-24fhd', nombre: 'Monitor 24" FHD 180Hz', marca: 'AOC', cat: 'Monitores', precio: 139, antes: 159, rating: 4.5, stock: 38, dest: false, specs: ['Panel', 'VA · 1,920 × 1,080', 'Tasa de refresco', '180 Hz', 'Tiempo de respuesta', '1 ms', 'Extras', 'FreeSync · bordes delgados'], art: 'monitor' },
  { id: 'kb-75', nombre: 'Teclado mecánico 75% RGB', marca: 'Keychron', cat: 'Periféricos', precio: 99, antes: 119, rating: 4.7, stock: 33, dest: false, specs: ['Formato', '75% · hot-swap', 'Switches', 'Rojos lineales', 'Conexión', 'Bluetooth · 2.4G · USB-C', 'Keycaps', 'PBT doble inyección', 'Extras', 'RGB por tecla'], art: 'kb' },
  { id: 'mouse-pro', nombre: 'Mouse inalámbrico 26K DPI', marca: 'Logitech', cat: 'Periféricos', precio: 59, antes: 69, rating: 4.6, stock: 60, dest: false, specs: ['Sensor', 'HERO 26K', 'Peso', '61 g', 'Conexión', '2.4G · Bluetooth', 'Batería', 'Hasta 95 h', 'Extras', '6 botones programables'], art: 'mouse' },
  { id: 'headset-71', nombre: 'Headset gamer 7.1', marca: 'HyperX', cat: 'Periféricos', precio: 79, antes: 95, rating: 4.5, stock: 28, dest: false, specs: ['Sonido', '7.1 virtual', 'Drivers', '53 mm', 'Micrófono', 'Desmontable · cancelación', 'Conexión', '2.4G inalámbrico', 'Autonomía', '30 h'], art: 'headset' },
  { id: 'psu-850', nombre: 'Fuente 850W 80+ Gold', marca: 'Corsair', cat: 'Fuentes y refrigeración', precio: 119, antes: 139, rating: 4.7, stock: 22, dest: false, specs: ['Potencia', '850 W · 80+ Gold', 'Modular', 'Full modular', 'Estándar', 'ATX 3.0 · PCIe 5.0', 'Ventilador', '140 mm hidráulico', 'Garantía', '10 años'], art: 'psu' },
  { id: 'aio-240', nombre: 'Refrigeración líquida 240mm RGB', marca: 'NZXT', cat: 'Fuentes y refrigeración', precio: 89, antes: 109, rating: 4.4, stock: 18, dest: false, specs: ['Radiador', '240 mm · 2 × 120 mm', 'Bomba', '3,000 RPM', 'Socket', 'AM5 · LGA1700', 'Extras', 'RGB direccionable', 'Ruido', 'Máx. 32 dB'], art: 'aio' }
];

const fmt = n => MONEDA + n.toLocaleString('en-US');
const uid = () => Math.random().toString(36).slice(2, 8);
const STORAGE_KEY = 'omnishop-cart-v1';

function svgArt(kind, seed) {
  const g = 'g' + seed;
  const defs = '<defs><linearGradient id="' + g + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#a78bfa"/></linearGradient></defs>';
  const open = '<svg viewBox="0 0 120 84" role="img" aria-hidden="true">';
  const shapes = {
    gpu: '<rect x="18" y="20" width="84" height="50" rx="6" fill="url(#' + g + ')" opacity=".14"/><rect x="18" y="20" width="84" height="50" rx="6" fill="none" stroke="url(#' + g + ')" stroke-width="1.4"/><circle cx="47" cy="45" r="13" fill="none" stroke="url(#' + g + ')" stroke-width="2"/><circle cx="75" cy="45" r="13" fill="none" stroke="url(#' + g + ')" stroke-width="2"/><line x1="47" y1="45" x2="47" y2="32" stroke="url(#' + g + ')" stroke-width="1.6"/><line x1="75" y1="45" x2="75" y2="32" stroke="url(#' + g + ')" stroke-width="1.6"/><line x1="47" y1="45" x2="60" y2="45" stroke="url(#' + g + ')" stroke-width="1.6"/><line x1="75" y1="45" x2="62" y2="45" stroke="url(#' + g + ')" stroke-width="1.6"/><rect x="8" y="30" width="8" height="30" rx="2" fill="url(#' + g + ')" opacity=".75"/>',
    cpu: '<rect x="34" y="16" width="52" height="52" rx="6" fill="url(#' + g + ')" opacity=".13"/><rect x="34" y="16" width="52" height="52" rx="6" fill="none" stroke="url(#' + g + ')" stroke-width="1.6"/><line x1="47" y1="16" x2="47" y2="68" stroke="url(#' + g + ')" stroke-width="1" opacity=".55"/><line x1="60" y1="16" x2="60" y2="68" stroke="url(#' + g + ')" stroke-width="1" opacity=".55"/><line x1="73" y1="16" x2="73" y2="68" stroke="url(#' + g + ')" stroke-width="1" opacity=".55"/><line x1="34" y1="29" x2="86" y2="29" stroke="url(#' + g + ')" stroke-width="1" opacity=".55"/><line x1="34" y1="42" x2="86" y2="42" stroke="url(#' + g + ')" stroke-width="1" opacity=".55"/><line x1="34" y1="55" x2="86" y2="55" stroke="url(#' + g + ')" stroke-width="1" opacity=".55"/><rect x="47" y="29" width="26" height="26" rx="3" fill="url(#' + g + ')" opacity=".38"/><circle cx="60" cy="42" r="4" fill="#04121a"/><circle cx="60" cy="42" r="4" fill="none" stroke="url(#' + g + ')" stroke-width="1"/>',
    ram: '<rect x="30" y="20" width="22" height="46" rx="3" fill="url(#' + g + ')" opacity=".14" stroke="url(#' + g + ')" stroke-width="1.2"/><rect x="56" y="20" width="22" height="46" rx="3" fill="url(#' + g + ')" opacity=".14" stroke="url(#' + g + ')" stroke-width="1.2"/><rect x="34" y="30" width="14" height="8" rx="2" fill="url(#' + g + ')" opacity=".7"/><rect x="60" y="30" width="14" height="8" rx="2" fill="url(#' + g + ')" opacity=".7"/><rect x="34" y="42" width="14" height="8" rx="2" fill="url(#' + g + ')" opacity=".7"/><rect x="60" y="42" width="14" height="8" rx="2" fill="url(#' + g + ')" opacity=".7"/><line x1="30" y1="22" x2="52" y2="22" stroke="url(#' + g + ')" stroke-width="3" stroke-linecap="round"/><line x1="56" y1="22" x2="78" y2="22" stroke="url(#' + g + ')" stroke-width="3" stroke-linecap="round"/>',
    ssd: '<rect x="10" y="34" width="100" height="20" rx="4" fill="url(#' + g + ')" opacity=".14" stroke="url(#' + g + ')" stroke-width="1.3"/><rect x="40" y="39" width="30" height="10" rx="2" fill="url(#' + g + ')" opacity=".75"/><rect x="14" y="39" width="12" height="10" rx="2" fill="none" stroke="url(#' + g + ')" stroke-width="1.2"/><path d="M100 40 L110 40 L110 44 L100 44 Z" fill="url(#' + g + ')" opacity=".8"/>',
    laptop: '<rect x="20" y="16" width="80" height="48" rx="5" fill="url(#' + g + ')" opacity=".14"/><rect x="20" y="16" width="80" height="48" rx="5" fill="none" stroke="url(#' + g + ')" stroke-width="1.4"/><line x1="28" y1="24" x2="92" y2="24" stroke="url(#' + g + ')" stroke-width="1.3"/><line x1="28" y1="60" x2="92" y2="60" stroke="url(#' + g + ')" stroke-width="1.3"/><rect x="34" y="26" width="52" height="24" rx="3" fill="url(#' + g + ')" opacity=".42"/><path d="M34 64 L48 70 H72 L86 64" fill="none" stroke="url(#' + g + ')" stroke-width="1.5" stroke-linecap="round"/>',
    monitor: '<rect x="18" y="18" width="84" height="46" rx="4" fill="url(#' + g + ')" opacity=".15" stroke="url(#' + g + ')" stroke-width="1.3"/><rect x="28" y="28" width="64" height="24" rx="2" fill="url(#' + g + ')" opacity=".5"/><rect x="34" y="64" width="52" height="7" rx="2" fill="url(#' + g + ')" opacity=".7"/><path d="M20 64 H100" stroke="url(#' + g + ')" stroke-width="1.5" stroke-linecap="round"/>',
    kb: '<rect x="20" y="30" width="80" height="28" rx="3" fill="url(#' + g + ')" opacity=".14" stroke="url(#' + g + ')" stroke-width="1.2"/><rect x="28" y="36" width="8" height="8" rx="1" fill="url(#' + g + ')" opacity=".8"/><rect x="38" y="36" width="8" height="8" rx="1" fill="url(#' + g + ')" opacity=".8"/><rect x="48" y="36" width="8" height="8" rx="1" fill="url(#' + g + ')" opacity=".8"/><rect x="58" y="36" width="8" height="8" rx="1" fill="url(#' + g + ')" opacity=".8"/><rect x="68" y="36" width="8" height="8" rx="1" fill="url(#' + g + ')" opacity=".8"/><rect x="78" y="36" width="8" height="8" rx="1" fill="url(#' + g + ')" opacity=".8"/><path d="M32 30 L88 30" stroke="url(#' + g + ')" stroke-width="1.4" stroke-linecap="round"/>',
    mouse: '<ellipse cx="60" cy="42" rx="28" ry="20" fill="url(#' + g + ')" opacity=".15" stroke="url(#' + g + ')" stroke-width="1.4"/><circle cx="60" cy="42" r="8" fill="url(#' + g + ')" opacity=".7"/><path d="M46 28 L74 28" stroke="url(#' + g + ')" stroke-width="1.4" stroke-linecap="round"/><path d="M46 56 L74 56" stroke="url(#' + g + ')" stroke-width="1.4" stroke-linecap="round"/>',
    headset: '<path d="M34 50 Q40 22 60 22 Q80 22 86 50" fill="none" stroke="url(#' + g + ')" stroke-width="2"/><rect x="28" y="46" width="18" height="20" rx="5" fill="url(#' + g + ')" opacity=".18" stroke="url(#' + g + ')" stroke-width="1.2"/><rect x="74" y="46" width="18" height="20" rx="5" fill="url(#' + g + ')" opacity=".18" stroke="url(#' + g + ')" stroke-width="1.2"/><path d="M38 52 C42 57 45 58 50 58" fill="none" stroke="url(#' + g + ')" stroke-width="1.5" stroke-linecap="round"/>',
    psu: '<rect x="18" y="20" width="84" height="46" rx="8" fill="url(#' + g + ')" opacity=".12" stroke="url(#' + g + ')" stroke-width="1.4"/><rect x="32" y="32" width="56" height="20" rx="4" fill="url(#' + g + ')" opacity=".6"/><path d="M34 20 L44 12 M76 20 L86 12 M32 66 L44 74 M76 66 L86 74" stroke="url(#' + g + ')" stroke-width="1.4" stroke-linecap="round"/>',
    aio: '<rect x="18" y="28" width="84" height="22" rx="5" fill="url(#' + g + ')" opacity=".14" stroke="url(#' + g + ')" stroke-width="1.3"/><rect x="28" y="24" width="20" height="30" rx="4" fill="url(#' + g + ')" opacity=".55"/><rect x="72" y="24" width="20" height="30" rx="4" fill="url(#' + g + ')" opacity=".55"/><path d="M40 18 L80 18" stroke="url(#' + g + ')" stroke-width="1.5" stroke-linecap="round"/>',
    default: '<rect x="22" y="26" width="76" height="32" rx="8" fill="url(#' + g + ')" opacity=".15"/><circle cx="50" cy="42" r="10" fill="url(#' + g + ')" opacity=".55"/><circle cx="70" cy="42" r="10" fill="url(#' + g + ')" opacity=".55"/>'
  };
  return open + defs + (shapes[kind] || shapes.default) + '</svg>';
}

const state = {
  categoria: 'Todas',
  orden: 'reco',
  query: ''
};

function readCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function updateCartBadge() {
  const badge = document.getElementById('cart-cnt');
  if (!badge) return;
  const count = readCart().reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = count;
  badge.classList.toggle('hide', count === 0);
}

function showToast(message, isError = false) {
  const toasts = document.getElementById('toasts');
  if (!toasts) return;
  const node = document.createElement('div');
  node.className = 'toast' + (isError ? ' err' : '');
  node.textContent = message;
  toasts.appendChild(node);
  requestAnimationFrame(() => node.classList.add('show'));
  setTimeout(() => {
    node.classList.remove('show');
    setTimeout(() => node.remove(), 350);
  }, 1800);
}

function getVisibleProducts() {
  const filtered = PRODUCTOS.filter((p) => {
    const matchesCategory = state.categoria === 'Todas' || p.cat === state.categoria;
    const matchesQuery = !state.query || `${p.nombre} ${p.marca} ${p.cat}`.toLowerCase().includes(state.query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  switch (state.orden) {
    case 'precio-asc':
      return filtered.sort((a, b) => a.precio - b.precio);
    case 'precio-desc':
      return filtered.sort((a, b) => b.precio - a.precio);
    case 'rating':
      return filtered.sort((a, b) => b.rating - a.rating);
    default:
      return filtered.sort((a, b) => Number(b.dest) - Number(a.dest) || b.rating - a.rating);
  }
}

function renderChips() {
  const chipsRoot = document.getElementById('chips');
  if (!chipsRoot) return;
  const categories = ['Todas', ...new Set(PRODUCTOS.map(p => p.cat))];
  chipsRoot.innerHTML = categories.map(cat => `
    <button class="chip ${state.categoria === cat ? 'on' : ''}" data-cat="${cat}">${cat}</button>
  `).join('');

  chipsRoot.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      state.categoria = chip.dataset.cat;
      renderCatalog();
      renderChips();
    });
  });
}

function getStockLabel(product) {
  if (product.stock <= 0) return '<span class="stock out">Sin stock</span>';
  if (product.stock <= 8) return '<span class="stock low">Últimas unidades</span>';
  return '<span class="stock">En stock</span>';
}

function renderCatalog() {
  const grid = document.getElementById('grid');
  if (!grid) return;

  const products = getVisibleProducts();
  if (!products.length) {
    grid.innerHTML = '<div class="empty">No hay productos que coincidan con tu búsqueda.</div>';
    return;
  }

  grid.innerHTML = products.map((p) => `
    <article class="card" data-id="${p.id}">
      <div class="art">
        ${p.dest ? '<span class="badge dest">DESTACADO</span>' : ''}
        ${p.antes && p.antes > p.precio ? '<span class="badge off">OFERTA</span>' : ''}
        ${svgArt(p.art, p.id)}
      </div>
      <div class="brand">${p.marca}</div>
      <h3>${p.nombre}</h3>
      <div class="rate">★ ${p.rating} <span>(${p.stock} disponibles)</span></div>
      <div class="specs-mini">${p.specs.slice(0, 4).join(' · ')}</div>
      <div class="prow">
        <div class="price"><b>${fmt(p.precio)}</b></div>
        ${p.antes && p.antes > p.precio ? `<div class="before">${fmt(p.antes)}</div>` : ''}
      </div>
      ${p.antes && p.antes > p.precio ? '<div class="off-tag">Ahorra ' + fmt(p.antes - p.precio) + '</div>' : ''}
      ${getStockLabel(p)}
      <div class="cactions">
        <button class="b-detail" data-detail="${p.id}">Detalles</button>
        <button class="b-add" data-add="${p.id}">Añadir</button>
      </div>
    </article>
  `).join('');
}

function openModal(productId) {
  const modal = document.getElementById('modal');
  const box = document.getElementById('modal-box');
  if (!modal || !box) return;

  const product = PRODUCTOS.find(p => p.id === productId);
  if (!product) return;

  let selectedQty = 1;
  box.innerHTML = `
    <button class="close-m" aria-label="Cerrar" data-close="modal">✕</button>
    <div class="big">
      <div class="art">${svgArt(product.art, product.id)}</div>
      <div class="meta">
        <div class="brand">${product.marca}</div>
        <h3>${product.nombre}</h3>
        <div class="rate">★ ${product.rating} <span>(${product.stock} en stock)</span></div>
        <div class="m-price"><b>${fmt(product.precio)}</b></div>
        <div class="buyrow">
          <div class="qty">
            <button type="button" data-qty="down" data-product="${product.id}">−</button>
            <span id="modal-qty">${selectedQty}</span>
            <button type="button" data-qty="up" data-product="${product.id}">+</button>
          </div>
          <button class="checkout" data-add-modal="${product.id}" data-qty="${selectedQty}">Añadir al carrito</button>
        </div>
        <p class="note">${product.dest ? 'Producto destacado • ' : ''}Envío ${product.precio >= ENVIO_GRATIS ? 'gratis' : 'desde ' + fmt(ENVIO)}.</p>
      </div>
    </div>
    <ul class="specs">
      ${product.specs.map((item, index) => index % 2 === 0 ? `<li><span>${item}</span><b>${product.specs[index + 1]}</b></li>` : '').filter(Boolean).join('')}
    </ul>
  `;

  modal.classList.add('show');

  const qtyDisplay = document.getElementById('modal-qty');
  const addButton = document.querySelector('[data-add-modal]');
  if (!addButton || !qtyDisplay) return;

  document.querySelectorAll('[data-qty]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.qty;
      selectedQty = Math.max(1, Math.min(product.stock || 1, action === 'up' ? selectedQty + 1 : selectedQty - 1));
      qtyDisplay.textContent = selectedQty;
      addButton.dataset.qty = String(selectedQty);
    });
  });

  addButton.addEventListener('click', () => {
    addToCart(product.id, selectedQty);
    modal.classList.remove('show');
  });

  const closeBtn = document.querySelector('[data-close="modal"]');
  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('show'));
}

function addToCart(productId, qty = 1) {
  const cart = readCart();
  const product = PRODUCTOS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }

  saveCart(cart);
  updateCartBadge();
  renderCart();
  showToast(`${product.nombre} añadido al carrito`);
}

function removeFromCart(productId) {
  const cart = readCart().filter(item => item.id !== productId);
  saveCart(cart);
  updateCartBadge();
  renderCart();
}

function updateQty(productId, delta) {
  const cart = readCart();
  const item = cart.find(entry => entry.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart(cart);
  updateCartBadge();
  renderCart();
}

function renderCart() {
  const list = document.getElementById('cart-list');
  const summary = document.getElementById('cart-summary');
  if (!list || !summary) return;

  const cart = readCart();
  if (!cart.length) {
    list.innerHTML = `
      <div class="cart-empty">
        <div class="big">🛒</div>
        <b>Tu carrito está vacío</b><br>
        Explora el catálogo y añade productos para comenzar tu compra.
        <div><a class="cont-link" href="index.html">Continuar comprando</a></div>
      </div>
    `;
    summary.innerHTML = `
      <h3>Resumen</h3>
      <div class="row"><span>Subtotal</span><span>${fmt(0)}</span></div>
      <div class="row"><span>Envío</span><span>${fmt(0)}</span></div>
      <div class="row total"><span>Total</span><b>${fmt(0)}</b></div>
      <button class="checkout" disabled>Finalizar compra</button>
      <button class="btn-sec" onclick="location.href='index.html'">Seguir comprando</button>
    `;
    return;
  }

  const items = cart
    .map(entry => {
      const product = PRODUCTOS.find(p => p.id === entry.id);
      return product ? { ...product, qty: entry.qty } : null;
    })
    .filter(Boolean);

  const subtotal = items.reduce((sum, item) => sum + item.precio * item.qty, 0);
  const envio = subtotal >= ENVIO_GRATIS || subtotal === 0 ? 0 : ENVIO;
  const total = subtotal + envio;
  const progress = Math.min(100, (subtotal / ENVIO_GRATIS) * 100);

  list.innerHTML = items.map(item => `
    <div class="cart-item">
      <div class="tart">${svgArt(item.art, item.id)}</div>
      <div class="cinfor">
        <div class="cname">${item.nombre}</div>
        <div class="cbrand">${item.marca}</div>
        <div class="qty">
          <button type="button" data-qty="down" data-product="${item.id}">−</button>
          <span>${item.qty}</span>
          <button type="button" data-qty="up" data-product="${item.id}">+</button>
        </div>
      </div>
      <div class="ctot">
        <div class="v">${fmt(item.precio * item.qty)}</div>
        <button class="rm" data-remove="${item.id}" aria-label="Eliminar">✕</button>
      </div>
    </div>
  `).join('');

  summary.innerHTML = `
    <h3>Resumen</h3>
    <div class="free-line">
      ${subtotal >= ENVIO_GRATIS ? '¡Envío gratis activado!' : `Falta ${fmt(ENVIO_GRATIS - subtotal)} para envío gratis`}
      <div class="bar"><i style="width:${progress}%"></i></div>
    </div>
    <div class="row"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
    <div class="row"><span>Envío</span><span>${envio === 0 ? 'Gratis' : fmt(envio)}</span></div>
    <div class="row total"><span>Total</span><b>${fmt(total)}</b></div>
    <button class="checkout" id="checkout-btn">Finalizar compra</button>
    <button class="btn-sec" onclick="location.href='index.html'">Seguir comprando</button>
  `;

  document.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.remove));
  });

  document.querySelectorAll('[data-qty]').forEach(btn => {
    btn.addEventListener('click', () => {
      const delta = btn.dataset.qty === 'up' ? 1 : -1;
      updateQty(btn.dataset.product, delta);
    });
  });

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const modal = document.getElementById('modal-ok');
      if (!modal) return;
      const info = document.getElementById('ok-info');
      if (info) {
        info.textContent = `Has pedido ${items.reduce((sum, item) => sum + item.qty, 0)} artículo(s) por ${fmt(total)}. Te avisaremos cuando el pedido esté preparado.`;
      }
      modal.classList.add('show');
    });
  }
}

function bindCatalogEvents() {
  const buscador = document.getElementById('buscador');
  if (buscador) {
    buscador.addEventListener('input', event => {
      state.query = event.target.value.trim();
      renderCatalog();
    });
  }

  const orden = document.getElementById('orden');
  if (orden) {
    orden.addEventListener('change', event => {
      state.orden = event.target.value;
      renderCatalog();
    });
  }

  const grid = document.getElementById('grid');
  if (grid) {
    grid.addEventListener('click', event => {
      const detailTarget = event.target.closest('[data-detail]');
      const addTarget = event.target.closest('[data-add]');
      if (detailTarget) openModal(detailTarget.dataset.detail);
      if (addTarget) addToCart(addTarget.dataset.add, 1);
    });
  }

  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', event => {
      if (event.target === modal) modal.classList.remove('show');
    });
  }

  const okModal = document.getElementById('modal-ok');
  if (okModal) {
    okModal.addEventListener('click', event => {
      if (event.target === okModal) okModal.classList.remove('show');
    });

    const closeBtn = document.getElementById('ok-cerrar');
    const okBtn = document.getElementById('ok-btn');

    if (closeBtn) closeBtn.addEventListener('click', () => okModal.classList.remove('show'));
    if (okBtn) okBtn.addEventListener('click', () => {
      okModal.classList.remove('show');
      saveCart([]);
      updateCartBadge();
      renderCart();
      window.location.href = 'index.html';
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const modalEl = document.getElementById('modal');
      const okModalEl = document.getElementById('modal-ok');
      if (modalEl) modalEl.classList.remove('show');
      if (okModalEl) okModalEl.classList.remove('show');
    }
  });

  const btnCatalog = document.getElementById('go-catalogo');
  const btnOfertas = document.getElementById('go-ofertas');
  if (btnCatalog) btnCatalog.addEventListener('click', () => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' }));
  if (btnOfertas) btnOfertas.addEventListener('click', () => {
    state.categoria = 'GPUs';
    renderChips();
    renderCatalog();
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelectorAll('[data-jump]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const cat = event.currentTarget.dataset.jump;
      state.categoria = cat;
      renderChips();
      renderCatalog();
      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderChips();
  renderCatalog();
  bindCatalogEvents();
  renderCart();
  updateCartBadge();
});

if (typeof window !== 'undefined') {
  window.OMNISHOP = { PRODUCTOS, fmt, svgArt, addToCart, updateQty, renderCart, renderCatalog };
}
