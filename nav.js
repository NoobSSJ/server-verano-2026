/* nav.js — inyecta la navegación en todas las páginas */
function buildNav(activePage) {
  const pages = [
    { href: "index.html",   icon: "⚡", label: "Inicio"    },
    { href: "players.html", icon: "👥", label: "Jugadores" },
    { href: "mods.html",    icon: "📦", label: "Modpack"   },
    { href: "rules.html",   icon: "📋", label: "Normas"    },
  ];

  const onlineCount = typeof ONLINE_PLAYERS !== "undefined" ? ONLINE_PLAYERS.length : "?";

  const html = `
  <nav>
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <span class="nav-logo-icon">⛏</span>
        <span class="nav-logo-text">${SERVER.name}<br><span style="color:var(--text-muted);font-size:.5rem">${SERVER.ip}</span></span>
      </a>
      <ul class="nav-links">
        ${pages.map(p => `
          <li><a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">
            <span class="icon">${p.icon}</span>
            <span>${p.label}</span>
          </a></li>
        `).join('')}
      </ul>
      <div class="nav-status">
        <span class="status-dot"></span>
        <span id="nav-online">${onlineCount}/${SERVER.maxPlayers}</span>
      </div>
    </div>
  </nav>`;
  document.body.insertAdjacentHTML('afterbegin', html);
}

function buildFooter() {
  document.body.insertAdjacentHTML('beforeend', `
  <footer>
    <p>⛏ <strong style="color:var(--green)">${SERVER.name}</strong> · ${SERVER.ip}:${SERVER.port} · ${SERVER.version}</p>
    <p style="margin-top:.4rem">Web actualizable editando <code style="color:var(--green)">data.js</code></p>
  </footer>`);
}

function timeSince(isoDate) {
  const secs = Math.floor((Date.now() - new Date(isoDate)) / 1000);
  if (secs < 60)   return `${secs}s`;
  if (secs < 3600) return `${Math.floor(secs/60)}min`;
  if (secs < 86400)return `${Math.floor(secs/3600)}h ${Math.floor((secs%3600)/60)}min`;
  return `${Math.floor(secs/86400)}d`;
}

function formatMinutes(m) {
  if (m < 60)    return `${m}min`;
  if (m < 1440)  return `${Math.floor(m/60)}h ${m%60}min`;
  return `${Math.floor(m/1440)}d ${Math.floor((m%1440)/60)}h`;
}

function roleBadge(role) {
  const map = {
    Admin: "badge-admin", Mod: "badge-mod", VIP: "badge-vip",
    Builder: "badge-builder", Jugador: "badge-jugador"
  };
  return `<span class="badge ${map[role]||'badge-jugador'}">${role}</span>`;
}

function statusIcon(status) {
  const map = {
    Explorando:"🗺", Construyendo:"🏗", Minando:"⛏",
    AFK:"💤", Luchando:"⚔", Cocinando:"🍖"
  };
  return map[status] || "🎮";
}
