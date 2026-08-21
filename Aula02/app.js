const products = [
  { id: 1, name: "Sensor IoT Industrial", brand: "NexaSense", category: "IoT Industrial", price: 1290, rating: 4.8, stock: "Em estoque", sku: "I4-SEN-001", featured: true, tech: "Wi-Fi / MQTT", voltage: "24V", application: "Monitoramento", imageHue: 196 },
  { id: 2, name: "CLP Industrial", brand: "ControlPro", category: "CLPs e Controladores", price: 4590, rating: 4.9, stock: "Em estoque", sku: "I4-CLP-002", featured: true, tech: "Ethernet / Profinet", voltage: "24V", application: "Automação", imageHue: 212 },
  { id: 3, name: "Robô Colaborativo", brand: "RoboForge", category: "Robótica", price: 28900, rating: 5.0, stock: "Sob consulta", sku: "I4-ROB-003", featured: true, tech: "6 eixos", voltage: "220V", application: "Montagem", imageHue: 222 },
  { id: 4, name: "Gateway IoT", brand: "EdgeLink", category: "Redes Industriais", price: 3890, rating: 4.7, stock: "Em estoque", sku: "I4-GTW-004", featured: true, tech: "OPC UA / Modbus", voltage: "24V", application: "Conectividade", imageHue: 198 },
  { id: 5, name: "Sensor de temperatura industrial", brand: "ThermoLab", category: "Sensores", price: 670, rating: 4.6, stock: "Em estoque", sku: "I4-TMP-005", featured: true, tech: "4-20mA", voltage: "12V", application: "Processos", imageHue: 186 },
  { id: 6, name: "Câmera de visão computacional", brand: "VisionCore", category: "Visão Computacional", price: 7420, rating: 4.9, stock: "Poucas unidades", sku: "I4-VIS-006", featured: true, tech: "GigE Vision", voltage: "24V", application: "Inspeção", imageHue: 208 },
  { id: 7, name: "Controlador de automação", brand: "AutoNode", category: "Sistemas de Controle", price: 5190, rating: 4.8, stock: "Em estoque", sku: "I4-AUT-007", featured: true, tech: "EtherNet/IP", voltage: "24V", application: "Controle", imageHue: 205 },
  { id: 8, name: "Kit de monitoramento industrial", brand: "PlantWatch", category: "Monitoramento", price: 3090, rating: 4.7, stock: "Em estoque", sku: "I4-MON-008", featured: true, tech: "Cloud dashboard", voltage: "24V", application: "OEE", imageHue: 201 },
  { id: 9, name: "Plataforma de IA preditiva", brand: "AIPulse", category: "Inteligência Artificial", price: 18800, rating: 4.9, stock: "Sob consulta", sku: "I4-AI-009", featured: false, tech: "SaaS / APIs", voltage: "N/A", application: "Predição", imageHue: 270 },
  { id: 10, name: "Módulo de segurança industrial", brand: "SafeGrid", category: "Segurança Industrial", price: 2180, rating: 4.5, stock: "Em estoque", sku: "I4-SAF-010", featured: false, tech: "Safety IO", voltage: "24V", application: "Proteção", imageHue: 170 },
  { id: 11, name: "Software MES Industrial", brand: "FlowMES", category: "Software Industrial", price: 24800, rating: 4.9, stock: "Licença", sku: "I4-SFT-011", featured: false, tech: "Web / API", voltage: "Cloud", application: "Produção", imageHue: 236 },
  { id: 12, name: "Sensor de vibração", brand: "VibraSense", category: "Sensores", price: 980, rating: 4.7, stock: "Em estoque", sku: "I4-VIB-012", featured: false, tech: "IIoT", voltage: "24V", application: "Manutenção", imageHue: 184 },
  { id: 13, name: "Rede industrial switch", brand: "NetForge", category: "Redes Industriais", price: 1740, rating: 4.6, stock: "Em estoque", sku: "I4-NET-013", featured: false, tech: "Managed switch", voltage: "24V", application: "Rede", imageHue: 210 },
  { id: 14, name: "Cobot de paletização", brand: "RoboForge", category: "Robótica", price: 35400, rating: 5.0, stock: "Sob consulta", sku: "I4-ROB-014", featured: false, tech: "Payload 12kg", voltage: "220V", application: "Logística", imageHue: 224 },
  { id: 15, name: "CLP modular avançado", brand: "ControlPro", category: "CLPs e Controladores", price: 6890, rating: 4.8, stock: "Em estoque", sku: "I4-CLP-015", featured: false, tech: "Modular IO", voltage: "24V", application: "Automação", imageHue: 214 },
  { id: 16, name: "Painel HMI industrial", brand: "VisualIQ", category: "Sistemas de Controle", price: 4380, rating: 4.7, stock: "Em estoque", sku: "I4-HMI-016", featured: false, tech: "Touch 10 pol.", voltage: "24V", application: "Interface", imageHue: 204 },
  { id: 17, name: "Sensor de pressão", brand: "PressLab", category: "Sensores", price: 1240, rating: 4.5, stock: "Em estoque", sku: "I4-PRS-017", featured: false, tech: "Analog / IO-Link", voltage: "24V", application: "Processos", imageHue: 188 },
  { id: 18, name: "Software de visão industrial", brand: "VisionCore", category: "Software Industrial", price: 15200, rating: 4.8, stock: "Licença", sku: "I4-SFT-018", featured: false, tech: "Machine vision", voltage: "Cloud", application: "Qualidade", imageHue: 226 },
  { id: 19, name: "Edge computer industrial", brand: "EdgeLink", category: "Computação em nuvem", price: 9020, rating: 4.8, stock: "Em estoque", sku: "I4-EDGE-019", featured: false, tech: "AI edge", voltage: "24V", application: "Borda", imageHue: 200 },
  { id: 20, name: "Sensor de proximidade", brand: "NexaSense", category: "Automação Industrial", price: 540, rating: 4.4, stock: "Em estoque", sku: "I4-PRX-020", featured: false, tech: "Indutivo", voltage: "12-24V", application: "Detecção", imageHue: 192 }
];

const categories = [
  ["Automação Industrial", "Soluções para controle e integração.", 124],
  ["Robótica", "Robôs e células automatizadas.", 38],
  ["IoT Industrial", "Sensores e conectividade na planta.", 84],
  ["Sensores", "Medição confiável para processos.", 96],
  ["Inteligência Artificial", "Análises e previsões em escala.", 27],
  ["Visão Computacional", "Inspeção e qualidade automatizada.", 21],
  ["Sistemas de Controle", "Interfaces, HMI e supervisão.", 44],
  ["CLPs e Controladores", "Cérebro da automação industrial.", 52],
  ["Redes Industriais", "Comunicação robusta e estável.", 33],
  ["Monitoramento", "Visibilidade de produção em tempo real.", 41],
  ["Segurança Industrial", "Proteção de pessoas e ativos.", 18],
  ["Software Industrial", "MES, analytics e integração.", 29]
];

const education = ["IoT", "Big Data", "Inteligência Artificial", "Robótica", "Automação", "Computação em nuvem", "Sistemas ciberfísicos", "Digital Twins"];

const problemSolutions = [
  ["Reduzir custos operacionais", "Automação, monitoramento e análise preditiva."],
  ["Aumentar a produtividade", "Robótica, layout inteligente e dados em tempo real."],
  ["Monitorar a produção", "Sensores, dashboards e rastreabilidade."],
  ["Reduzir paradas", "Manutenção preditiva e alertas de anomalia."],
  ["Melhorar a qualidade", "Visão computacional e inspeção automatizada."],
  ["Conectar a fábrica", "Gateways, redes industriais e integração cloud."]
];

const clients = [
  "Metalúrgica Atlas", "AutoParts Sul", "Fábrica Orion", "Química Delta", "Alimentos Nexo",
  "Energia Prime", "Têxtil Vector", "Papel Forte", "Linha Verde", "Mecânica Sigma"
];

const orders = Array.from({ length: 15 }, (_, index) => ({
  id: `PED-${String(index + 1).padStart(3, "0")}`,
  client: clients[index % clients.length],
  status: ["Pago", "Separação", "Em trânsito", "Concluído"][index % 4],
  total: 4800 + index * 670
}));

const quotes = Array.from({ length: 8 }, (_, index) => ({
  id: `ORC-${String(index + 1).padStart(3, "0")}`,
  client: clients[(index + 2) % clients.length],
  status: ["Análise", "Aguardando retorno", "Aprovado"][index % 3]
}));

const state = {
  page: "home",
  productId: 1,
  cart: [{ id: 2, qty: 2 }, { id: 5, qty: 3 }],
  favorites: new Set([1, 3, 6]),
  search: "",
  filters: new Map(),
  sort: "relevance",
  detailTab: "Descrição"
};

const pages = Array.from(document.querySelectorAll(".page"));
const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");
const menuToggle = document.getElementById("menuToggle");
const topbar = document.querySelector(".topbar");

function money(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function imageFor(product, variant = 0) {
  const hue = (product.imageHue + variant * 18) % 360;
  const seed = product.name.slice(0, 2).toUpperCase();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="hsl(${hue}, 85%, 88%)" />
          <stop offset="100%" stop-color="hsl(${(hue + 35) % 360}, 72%, 60%)" />
        </linearGradient>
      </defs>
      <rect width="900" height="700" rx="42" fill="url(#g)"/>
      <circle cx="730" cy="110" r="90" fill="rgba(255,255,255,0.24)"/>
      <rect x="72" y="480" width="420" height="80" rx="18" fill="rgba(10,25,44,0.18)"/>
      <rect x="118" y="184" width="300" height="230" rx="26" fill="rgba(255,255,255,0.4)"/>
      <rect x="470" y="210" width="260" height="190" rx="26" fill="rgba(255,255,255,0.28)"/>
      <text x="78" y="112" font-size="68" font-family="Arial, sans-serif" font-weight="700" fill="rgba(10,25,44,0.82)">${seed}</text>
      <text x="78" y="640" font-size="34" font-family="Arial, sans-serif" font-weight="700" fill="rgba(10,25,44,0.72)">${product.brand}</text>
      <text x="78" y="592" font-size="28" font-family="Arial, sans-serif" fill="rgba(10,25,44,0.68)">${product.category}</text>
    </svg>
  `)}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function cartItems() {
  return state.cart.map((entry) => ({ ...entry, product: getProduct(entry.id) })).filter((item) => item.product);
}

function cartTotal() {
  return cartItems().reduce((sum, item) => sum + item.product.price * item.qty, 0);
}

function filteredProducts() {
  let list = [...products];
  const search = state.search.trim().toLowerCase();
  if (search) {
    list = list.filter((product) =>
      [product.name, product.brand, product.category, product.sku]
        .join(" ")
        .toLowerCase()
        .includes(search)
    );
  }
  for (const [key, value] of state.filters.entries()) {
    if (!value) continue;
    if (key === "availability" && value !== "Todos") {
      list = list.filter((product) => product.stock === value);
    }
    if (key === "category" && value !== "Todas") {
      list = list.filter((product) => product.category === value);
    }
    if (key === "brand" && value !== "Todas") {
      list = list.filter((product) => product.brand === value);
    }
    if (key === "voltage" && value !== "Todas") {
      list = list.filter((product) => product.voltage === value);
    }
    if (key === "tech" && value !== "Todas") {
      list = list.filter((product) => product.tech.includes(value));
    }
  }
  if (state.sort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (state.sort === "price-desc") list.sort((a, b) => b.price - a.price);
  if (state.sort === "rating") list.sort((a, b) => b.rating - a.rating);
  if (state.sort === "sales") list.sort((a, b) => a.id - b.id);
  if (state.sort === "new") list.sort((a, b) => b.id - a.id);
  return list;
}

function setPage(page, productId = state.productId) {
  state.page = page;
  state.productId = productId;
  pages.forEach((section) => section.classList.toggle("active", section.id === `${page}Page`));
  if (window.innerWidth < 760) topbar.classList.remove("open");
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navButtons(scope = document) {
  return scope.querySelectorAll("[data-nav]");
}

function renderCategoryGrid() {
  const target = document.getElementById("categoryGrid");
  if (!target) return;
  target.innerHTML = categories
    .map(
      ([name, description, qty], index) => `
        <article class="category-card">
          <div class="icon">${["⚙", "🤖", "📡", "🛰", "🧠", "📷"][index % 6]}</div>
          <h3>${name}</h3>
          <p class="muted">${description}</p>
          <span class="tag">${qty} produtos</span>
        </article>
      `
    )
    .join("");
}

function productCard(product) {
  const favorite = state.favorites.has(product.id) ? "♥" : "♡";
  return `
    <article class="product-card">
      <div class="product-visual">
        <img src="${imageFor(product)}" alt="${product.name}" />
      </div>
      <div class="product-badge">${product.category}</div>
      <h3>${product.name}</h3>
      <div class="product-meta">${product.brand} • ${product.sku}</div>
      <div>⭐ ${product.rating.toFixed(1)} • ${product.stock}</div>
      <div class="product-price">${money(product.price)}</div>
      <div class="product-actions">
        <button class="primary-btn" data-add="${product.id}">Adicionar ao carrinho</button>
        <button class="secondary-btn" data-fav="${product.id}">${favorite}</button>
        <button class="ghost-btn" data-product="${product.id}">Ver detalhes</button>
      </div>
    </article>
  `;
}

function renderFeaturedGrid() {
  const target = document.getElementById("featuredGrid");
  if (!target) return;
  target.innerHTML = products.filter((product) => product.featured).map(productCard).join("");
}

function renderEducation() {
  const target = document.getElementById("educationGrid");
  if (!target) return;
  target.innerHTML = education
    .map((item) => `<div class="pill-card"><strong>${item}</strong><p class="muted">Conectividade e automação em evolução.</p></div>`)
    .join("");
}

function renderProblems() {
  const target = document.getElementById("problemList");
  if (!target) return;
  target.innerHTML = problemSolutions
    .map(
      ([problem, solution]) => `
        <div class="problem-card">
          <h3>${problem}</h3>
          <p class="muted">${solution}</p>
        </div>
      `
    )
    .join("");
}

function renderCatalogFilters() {
  const target = document.getElementById("filterList");
  if (!target) return;
  const unique = (key) => ["Todas", ...new Set(products.map((item) => item[key]))];
  const controls = [
    ["category", "Categoria", unique("category")],
    ["brand", "Marca", unique("brand")],
    ["availability", "Disponibilidade", ["Todos", "Em estoque", "Poucas unidades", "Sob consulta", "Licença"]],
    ["voltage", "Tensão", unique("voltage")],
    ["tech", "Tecnologia", ["Todas", "MQTT", "OPC UA", "Ethernet", "Modbus", "SaaS", "AI", "Vision"]]
  ];
  target.innerHTML = controls
    .map(
      ([key, label, options]) => `
        <label class="field">
          <span>${label}</span>
          <select data-filter="${key}">
            ${options.map((option) => `<option value="${option}">${option}</option>`).join("")}
          </select>
        </label>
      `
    )
    .join("");
  target.querySelectorAll("[data-filter]").forEach((select) => {
    select.value = state.filters.get(select.dataset.filter) || select.value;
  });
}

function renderSortOptions() {
  const select = document.getElementById("sortSelect");
  if (!select || select.options.length) return;
  const options = [
    ["relevance", "Mais relevantes"],
    ["price-asc", "Menor preço"],
    ["price-desc", "Maior preço"],
    ["sales", "Mais vendidos"],
    ["rating", "Mais avaliados"],
    ["new", "Lançamentos"]
  ];
  select.innerHTML = options.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
  select.value = state.sort;
}

function renderCatalogGrid() {
  const target = document.getElementById("catalogGrid");
  if (!target) return;
  const list = filteredProducts();
  target.innerHTML = list.map(productCard).join("") || `<div class="card-section muted">Nenhum produto encontrado.</div>`;
  const searchField = document.getElementById("catalogSearch");
  if (searchField) searchField.value = state.search;
  const count = document.getElementById("resultCount");
  if (count) count.textContent = `${list.length} resultados encontrados`;
}

function renderProductDetail() {
  const target = document.getElementById("productDetail");
  if (!target) return;
  const product = getProduct(state.productId) || products[0];
  const tabs = ["Descrição", "Especificações técnicas", "Aplicações", "Documentação", "Avaliações"];
  const details = {
    "Descrição": `Produto corporativo para ambientes industriais com alta confiabilidade, integração simples e pronta compatibilidade com plataformas de automação.`,
    "Especificações técnicas": `
      <table class="spec-table">
        <tr><td>SKU</td><td>${product.sku}</td></tr>
        <tr><td>Marca</td><td>${product.brand}</td></tr>
        <tr><td>Tecnologia</td><td>${product.tech}</td></tr>
        <tr><td>Tensão</td><td>${product.voltage}</td></tr>
        <tr><td>Aplicação</td><td>${product.application}</td></tr>
      </table>
    `,
    "Aplicações": `Adequado para ${product.application.toLowerCase()}, integração industrial e projetos de modernização de planta.`,
    "Documentação": "Datasheet, manual técnico, guia de integração, certificado e arquivos de comunicação disponíveis para equipe comercial.",
    "Avaliações": "Clientes industriais destacam robustez, facilidade de instalação e excelente suporte técnico."
  };
  target.innerHTML = `
    <div class="detail-layout">
      <div class="detail-gallery">
        <div class="main-image"><img data-main-image src="${imageFor(product)}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover" /></div>
        <div class="thumb-row">
          ${[0, 1, 2, 3].map((variant) => `<div class="thumb ${variant === 0 ? "active" : ""}" data-thumb="${variant}"><img src="${imageFor(product, variant)}" alt="${product.name} ${variant + 1}" /></div>`).join("")}
        </div>
      </div>
      <div>
        <span class="eyebrow">${product.category}</span>
        <h2>${product.name}</h2>
        <p class="muted">${product.brand} • ${product.sku} • ⭐ ${product.rating.toFixed(1)} • ${product.stock}</p>
        <div class="price-box">
          <div class="product-price">${money(product.price)}</div>
          <p class="muted">Condições de pagamento: cartão, PIX, boleto ou faturamento empresarial.</p>
          <p><strong>Disponibilidade:</strong> ${product.stock}</p>
        </div>
        <div class="toolbar-row">
          <button class="primary-btn" data-add="${product.id}">Adicionar ao carrinho</button>
          <button class="secondary-btn" data-buy="${product.id}">Comprar agora</button>
          <button class="ghost-btn" data-nav="quote">Solicitar orçamento</button>
        </div>
        <div class="tabs">
          <div class="tab-row">
            ${tabs.map((tab) => `<button class="tab-btn ${state.detailTab === tab ? "active" : ""}" data-tab="${tab}">${tab}</button>`).join("")}
          </div>
          <div class="tab-panel active" id="detailTabContent">${details[state.detailTab]}</div>
        </div>
      </div>
    </div>
  `;
}

function renderCart() {
  const target = document.getElementById("cartList");
  if (!target) return;
  const items = cartItems();
  target.innerHTML = `
    ${
      items.length
        ? items
            .map(
              ({ product, qty }) => `
                <article class="cart-item">
                  <div class="thumb"><img src="${imageFor(product)}" alt="${product.name}" /></div>
                  <div>
                    <strong>${product.name}</strong>
                    <div class="muted">${product.brand} • ${product.category}</div>
                    <div class="cart-actions">
                      <button class="ghost-btn" data-qty="${product.id}" data-dir="-1">-</button>
                      <span>Quantidade: ${qty}</span>
                      <button class="ghost-btn" data-qty="${product.id}" data-dir="1">+</button>
                      <button class="secondary-btn" data-save="${product.id}">Salvar para depois</button>
                      <button class="ghost-btn" data-remove="${product.id}">Remover</button>
                    </div>
                  </div>
                  <div>
                    <strong>${money(product.price * qty)}</strong>
                    <div class="muted">${money(product.price)} unit.</div>
                  </div>
                </article>
              `
            )
            .join("")
        : `<div class="muted">Seu carrinho está vazio. Adicione produtos do catálogo para começar.</div>`
    }
    <div class="cart-summary">
      <div class="summary-box">
        <div class="row-actions" style="justify-content:space-between"><span>Frete estimado</span><strong>${money(items.length ? 280 : 0)}</strong></div>
        <div class="row-actions" style="justify-content:space-between"><span>Total</span><strong>${money(cartTotal() + (items.length ? 280 : 0))}</strong></div>
        <div class="btn-row" style="justify-content:flex-end;margin-top:14px">
          <button class="secondary-btn" data-nav="catalog">Continuar comprando</button>
          <button class="primary-btn" data-nav="checkout">Finalizar pedido</button>
        </div>
      </div>
    </div>
  `;
}

function buildForm(fields, id) {
  const form = document.getElementById(id);
  if (!form) return;
  form.innerHTML = fields
    .map(
      (field) => `
        <label class="field ${field.full ? "full" : ""}">
          <span>${field.label}</span>
          ${field.type === "textarea" ? `<textarea rows="4" placeholder="${field.placeholder || ""}"></textarea>` : `<input type="${field.type || "text"}" placeholder="${field.placeholder || ""}" />`}
        </label>
      `
    )
    .join("");
  const extra = document.createElement("div");
  extra.className = "field full";
  extra.innerHTML = `
    <span>${id === "checkoutForm" ? "Pagamento" : "Observação principal"}</span>
    <div class="option-row">
      ${
        id === "checkoutForm"
          ? ["Cartão", "PIX", "Boleto", "Faturamento empresarial"].map((item) => `<label class="option"><input type="radio" name="payment" ${item === "Faturamento empresarial" ? "checked" : ""} /> ${item}</label>`).join("")
          : `<label class="option" style="flex:1 1 100%"><input type="checkbox" checked /> Nossa equipe comercial entrará em contato para preparar uma proposta personalizada.</label>`
      }
    </div>
  `;
  form.appendChild(extra);
  const actions = document.createElement("div");
  actions.className = "field full btn-row";
  actions.innerHTML = `<button class="primary-btn" type="submit">${id === "checkoutForm" ? "Concluir pedido" : "Enviar solicitação"}</button>`;
  form.appendChild(actions);
}

function renderAccount() {
  const menu = document.getElementById("accountMenu");
  const content = document.getElementById("accountContent");
  if (!menu || !content) return;
  const items = ["Dashboard", "Meus pedidos", "Meus orçamentos", "Favoritos", "Dados da empresa", "Endereços", "Usuários da empresa", "Configurações"];
  menu.innerHTML = items.map((item, index) => `<button class="${index === 0 ? "active" : ""}">${item}</button>`).join("");
  content.innerHTML = `
    <div class="metric-grid">
      <div class="metric-card"><strong>15</strong><span>pedidos realizados</span></div>
      <div class="metric-card"><strong>4</strong><span>pedidos em andamento</span></div>
      <div class="metric-card"><strong>8</strong><span>orçamentos</span></div>
      <div class="metric-card"><strong>${state.favorites.size}</strong><span>produtos favoritos</span></div>
    </div>
    <div class="account-grid" style="margin-top:18px">
      ${orders.slice(0, 4).map((order) => `<article class="order-card"><strong>${order.id}</strong><span>${order.client}</span><span>${order.status}</span><strong>${money(order.total)}</strong></article>`).join("")}
    </div>
  `;
}

function renderAdmin() {
  const menu = document.getElementById("adminMenu");
  const content = document.getElementById("adminContent");
  if (!menu || !content) return;
  const items = ["Visão geral", "Produtos", "Pedidos", "Clientes", "Estoque", "Orçamentos", "Usuários", "Métricas"];
  menu.innerHTML = items.map((item, index) => `<button class="${index === 0 ? "active" : ""}">${item}</button>`).join("");
  content.innerHTML = `
    <div class="metric-grid">
      <div class="metric-card"><strong>${money(248000)}</strong><span>faturamento</span></div>
      <div class="metric-card"><strong>15</strong><span>pedidos</span></div>
      <div class="metric-card"><strong>10</strong><span>clientes</span></div>
      <div class="metric-card"><strong>20</strong><span>produtos</span></div>
    </div>
    <div class="split-grid" style="margin-top:18px">
      <div class="card panel">
        <h3>Vendas por período</h3>
        <div class="mini-bars">
          ${[38, 56, 64, 81, 72, 92].map((value, index) => `<div><small>Mês ${index + 1}</small><div class="bar"><span style="width:${value}%"></span></div></div>`).join("")}
        </div>
      </div>
      <div class="card panel">
        <h3>Produtos mais vendidos</h3>
        <div class="mini-bars">
          ${products.slice(0, 5).map((product, index) => `<div><small>${product.name}</small><div class="bar"><span style="width:${92 - index * 13}%"></span></div></div>`).join("")}
        </div>
      </div>
    </div>
    <div class="admin-grid" style="margin-top:18px">
      ${orders.slice(0, 5).map((order) => `<article class="order-card"><strong>${order.id}</strong><span>${order.client}</span><span>${order.status}</span><span>${money(order.total)}</span></article>`).join("")}
    </div>
  `;
}

function renderSolutionsPage() {
  const target = document.getElementById("solutionsPage");
  if (!target || target.dataset.rendered) return;
  target.dataset.rendered = "true";
  target.innerHTML = `
    <section class="card section-shell">
      <span class="eyebrow">Soluções por problema</span>
      <h2>Conecte a necessidade industrial à resposta certa</h2>
      <div class="product-grid" style="grid-template-columns:repeat(3,minmax(0,1fr));margin-top:18px">
        ${problemSolutions.map(([problem, solution]) => `<article class="problem-card"><h3>${problem}</h3><p class="muted">${solution}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function renderEducationPage() {
  const target = document.getElementById("educationPage");
  if (!target || target.dataset.rendered) return;
  target.dataset.rendered = "true";
  target.innerHTML = `
    <section class="card section-shell">
      <span class="eyebrow">Conteúdo educativo</span>
      <h2>O que é Indústria 4.0?</h2>
      <div class="product-grid" style="grid-template-columns:repeat(4,minmax(0,1fr));margin-top:18px">
        ${education.map((item) => `<article class="category-card"><div class="icon">◆</div><h3>${item}</h3><p class="muted">Tecnologia aplicada à fábrica conectada.</p></article>`).join("")}
      </div>
      <div class="card panel" style="margin-top:18px;padding:24px;background:linear-gradient(135deg,rgba(18,58,99,0.95),rgba(31,111,214,0.9));color:#fff">
        <h3>Smart Factory</h3>
        <p>A operação ideal conecta máquinas, pessoas e dados para melhorar eficiência, qualidade e previsibilidade.</p>
      </div>
    </section>
  `;
}

function renderFavoritesPage() {
  const target = document.getElementById("favoritesPage");
  if (!target) return;
  const list = products.filter((product) => state.favorites.has(product.id));
  target.innerHTML = `
    <section class="card section-shell">
      <span class="eyebrow">Favoritos</span>
      <h2>Produtos salvos para comparação rápida</h2>
      <div class="product-grid" style="margin-top:18px">${(list.length ? list : products.slice(0, 3)).map(productCard).join("")}</div>
    </section>
  `;
}

function renderForms() {
  buildForm([
    { label: "Razão social", placeholder: "Empresa ABC Indústria LTDA" },
    { label: "Nome fantasia", placeholder: "ABC Automação" },
    { label: "CNPJ", placeholder: "00.000.000/0001-00" },
    { label: "Inscrição estadual", placeholder: "123.456.789.000" },
    { label: "E-mail corporativo", placeholder: "compras@empresa.com", type: "email" },
    { label: "Telefone", placeholder: "(11) 99999-9999" },
    { label: "CEP", placeholder: "00000-000" },
    { label: "Estado", placeholder: "SP" },
    { label: "Cidade", placeholder: "São Paulo" },
    { label: "Endereço", placeholder: "Rua Industrial" },
    { label: "Número", placeholder: "123" },
    { label: "Complemento", placeholder: "Galpão 2" },
    { label: "Observações", placeholder: "Descreva necessidades da empresa", type: "textarea", full: true }
  ], "checkoutForm");

  buildForm([
    { label: "Empresa", placeholder: "Nome da empresa" },
    { label: "CNPJ", placeholder: "00.000.000/0001-00" },
    { label: "Nome do responsável", placeholder: "Nome completo" },
    { label: "E-mail corporativo", placeholder: "contato@empresa.com", type: "email" },
    { label: "Telefone", placeholder: "(11) 99999-9999" },
    { label: "Produtos desejados", placeholder: "Liste os produtos", type: "textarea", full: true },
    { label: "Quantidade", placeholder: "Ex.: 50" },
    { label: "Observações", placeholder: "Informações complementares", type: "textarea", full: true }
  ], "quoteForm");
}

function updateCartCount() {
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function syncFiltersFromUI() {
  document.querySelectorAll("[data-filter]").forEach((select) => {
    state.filters.set(select.dataset.filter, select.value);
  });
}

function render() {
  updateCartCount();
  renderCategoryGrid();
  renderFeaturedGrid();
  renderEducation();
  renderProblems();
  renderCatalogFilters();
  renderSortOptions();
  renderCatalogGrid();
  renderProductDetail();
  renderCart();
  renderAccount();
  renderAdmin();
  renderSolutionsPage();
  renderEducationPage();
  renderFavoritesPage();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-nav], [data-product], [data-add], [data-fav], [data-remove], [data-qty], [data-buy], [data-tab], [data-thumb]");
  if (!target) return;

  if (target.dataset.nav) {
    if (target.dataset.nav === "favorites") {
      setPage("favorites");
      return;
    }
    setPage(target.dataset.nav);
  }

  if (target.dataset.product) {
    setPage("product", Number(target.dataset.product));
  }

  if (target.dataset.add) {
    const id = Number(target.dataset.add);
    const item = state.cart.find((entry) => entry.id === id);
    if (item) item.qty += 1;
    else state.cart.push({ id, qty: 1 });
    showToast("Produto adicionado ao carrinho");
    updateCartCount();
    if (state.page === "cart") renderCart();
  }

  if (target.dataset.fav) {
    const id = Number(target.dataset.fav);
    if (state.favorites.has(id)) state.favorites.delete(id);
    else state.favorites.add(id);
    showToast("Favoritos atualizados");
    render();
  }

  if (target.dataset.remove) {
    const id = Number(target.dataset.remove);
    state.cart = state.cart.filter((entry) => entry.id !== id);
    showToast("Produto removido do carrinho");
    renderCart();
    updateCartCount();
  }

  if (target.dataset.save) {
    const id = Number(target.dataset.save);
    state.favorites.add(id);
    state.cart = state.cart.filter((entry) => entry.id !== id);
    showToast("Produto salvo para depois");
    render();
  }

  if (target.dataset.qty) {
    const id = Number(target.dataset.qty);
    const dir = Number(target.dataset.dir);
    const item = state.cart.find((entry) => entry.id === id);
    if (item) {
      item.qty = Math.max(1, item.qty + dir);
      renderCart();
      updateCartCount();
    }
  }

  if (target.dataset.buy) {
    const id = Number(target.dataset.buy);
    const product = getProduct(id);
    state.cart = [{ id, qty: 1 }];
    showToast(`Compra pronta para ${product.name}`);
    setPage("checkout");
  }

  if (target.dataset.tab) {
    state.detailTab = target.dataset.tab;
    renderProductDetail();
  }

  if (target.dataset.thumb) {
    const product = getProduct(state.productId) || products[0];
    document.querySelectorAll(".thumb").forEach((thumb) => thumb.classList.remove("active"));
    target.classList.add("active");
    const mainImage = document.querySelector("[data-main-image]");
    if (mainImage) mainImage.src = imageFor(product, Number(target.dataset.thumb));
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "globalSearch" || event.target.id === "catalogSearch") {
    state.search = event.target.value;
    if (state.page === "catalog") renderCatalogGrid();
    if (event.target.id === "globalSearch") {
      setPage("catalog");
      document.getElementById("catalogSearch").value = event.target.value;
      state.search = event.target.value;
      renderCatalogGrid();
    }
  }
  if (event.target.matches("[data-filter]")) {
    syncFiltersFromUI();
    renderCatalogGrid();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.id === "sortSelect") {
    state.sort = event.target.value;
    renderCatalogGrid();
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "checkoutForm" || event.target.id === "quoteForm") {
    event.preventDefault();
    showToast(event.target.id === "checkoutForm" ? "Pedido B2B gerado com sucesso" : "Solicitação de orçamento enviada");
    event.target.reset();
  }
});

menuToggle.addEventListener("click", () => topbar.classList.toggle("open"));

document.querySelectorAll(".brand").forEach((brand) => {
  brand.addEventListener("keypress", (event) => {
    if (event.key === "Enter") setPage("home");
  });
});

renderForms();
updateCartCount();
render();
setPage("home");
