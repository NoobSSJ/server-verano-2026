/* ============================================================
   DATA.JS — Edita este archivo para actualizar la web
   ============================================================
   CÓMO CONECTAR AL SERVIDOR REAL:
   Sustituye los datos de ejemplo por llamadas a la API de
   mcsrvstat.us o a tu propio backend Node/PHP.
   Ver README al final de este archivo.
   ============================================================ */

const SERVER = {
  name:    "Summer Server ATM10",
  ip:      "???",
  port:    25565,
  version: "1.21.x · Neoforge",
  motd:    "Yo soy el All the Mods",
  maxPlayers: 20,
  /* URL del banner/icono del servidor (64x64) — deja "" para usar el ícono por defecto */
  iconUrl: "",
};

/* ── JUGADORES EN LÍNEA ────────────────────────────────────────────────────
   connected    : true/false
   joinedAt     : ISO timestamp de cuando entró esta sesión
   totalMinutes : minutos totales jugados (todas las sesiones)
   role         : "Admin" | "Mod" | "VIP" | "Jugador"
   location     : zona del mundo donde está
   status       : "Explorando" | "Construyendo" | "Minando" | "AFK" | "Luchando"
   ───────────────────────────────────────────────────────────────────────── */
const ONLINE_PLAYERS = [
  { name:"NoobSSJ",    avatar:"https://mc-heads.net/avatar/Steve/40",    role:"Admin",   joinedAt: new Date(Date.now()-5400000).toISOString(),  totalMinutes:0, location:"???", status:"???" },
  { name:"Bioemga",     avatar:"https://mc-heads.net/avatar/Alex/40",     role:"Jugador",     joinedAt: new Date(Date.now()-1800000).toISOString(),  totalMinutes:0, location:"???",      status:"???"      },
  { name:"Akuma", avatar:"https://mc-heads.net/avatar/Enderman/40", role:"Jugador",     joinedAt: new Date(Date.now()-900000).toISOString(),   totalMinutes:0, location:"???",                   status:"???"   },
  { name:"RobraXx",  avatar:"https://mc-heads.net/avatar/Diamond/40",  role:"Jugador", joinedAt: new Date(Date.now()-300000).toISOString(),   totalMinutes:0, location:"???",           status:"???"          },
];

/* ── TODOS LOS JUGADORES (para la página /players) ────────────────────────── */
const ALL_PLAYERS = [
  { name:"NoobSSJ",    avatar:"https://api.mcheads.org/head/NoobSSJ/256",    role:"Admin",   totalMinutes:0,  lastSeen:"Offline",    joined:"01/01/2025", achievements:142, deaths:12  },
  { name:"Bioemga",     avatar:"https://mc-heads.net/avatar/Alex/40",     role:"Jugador",     totalMinutes:0,  lastSeen:"Offline",    joined:"15/01/2025", achievements:118, deaths:34  },
  { name:"Akuma",avatar:"https://api.mcheads.org/head/Monstakill99/256",role:"Jugador", totalMinutes:0,  lastSeen:"Offline",  joined:"01/02/2025", achievements:201, deaths:7   },
  { name:"RobraXx",    avatar:"https://mc-heads.net/avatar/Notch/40",    role:"Jugador", totalMinutes:0,  lastSeen:"Offline", joined:"10/02/2025", achievements:95,  deaths:56  },
  { name:"Bruhh", avatar:"https://mc-heads.net/avatar/Enderman/40", role:"Jugador",     totalMinutes:0,  lastSeen:"Offline",    joined:"01/03/2025", achievements:77,  deaths:23  },
  { name:"Caseoh",  avatar:"https://mc-heads.net/avatar/Creeper/40",  role:"Jugador", totalMinutes:0,  lastSeen:"Offline",joined:"05/03/2025", achievements:43,  deaths:89  },
  { name:"Vel",  avatar:"https://mc-heads.net/avatar/Diamond/40",  role:"Jugador", totalMinutes:0,  lastSeen:"Offline",    joined:"01/04/2025", achievements:61,  deaths:44  },
  { name:"Vins",   avatar:"https://mc-heads.net/avatar/Zombie/40",   role:"Jugador", totalMinutes:0,   lastSeen:"Offline",  joined:"20/04/2025", achievements:28,  deaths:112 },
];

/* ── MODS (para la página /mods) ──────────────────────────────────────────── */
const MODS = [
  {
    category: "Mundo y Exploración",
    color: "#2E7D32",
    mods: [
      { name:"Waystones",          version:"21.x-1.0",  desc:"Piedras de teletransporte repartidas por el mundo. Viaja entre puntos guardados.", url:"https://modrinth.com/mod/waystones", required:true  },
      { name:"Terralith",          version:"2.5.4",     desc:"Regenera la generación del mundo con biomas épicos y paisajes únicos.",             url:"https://modrinth.com/mod/terralith", required:true  },
      { name:"Biomes O' Plenty",   version:"21.0.0",    desc:"Añade más de 80 biomas nuevos con flora y fauna exclusiva.",                        url:"https://modrinth.com/mod/biomes-o-plenty", required:false },
    ]
  },
  {
    category: "Utilidades y QoL",
    color: "#1565C0",
    mods: [
      { name:"JourneyMap",         version:"6.0.0",     desc:"Mapa en tiempo real del mundo con waypoints y radar de entidades.",                 url:"https://modrinth.com/mod/journeymap", required:false },
      { name:"Inventory Tweaks",   version:"1.12.0",    desc:"Ordena el inventario automáticamente. Clic derecho en el inventario para ordenar.", url:"https://modrinth.com/mod/inventory-tweaks", required:false },
      { name:"AppleSkin",          version:"3.0.0",     desc:"Muestra en pantalla cuánta hambre y saturación recuperas al comer.",               url:"https://modrinth.com/mod/appleskin", required:false },
      { name:"Xaero's Minimap",    version:"24.6.0",    desc:"Minimapa ligero en la esquina de pantalla con radar de jugadores.",                url:"https://modrinth.com/mod/xaeros-minimap", required:false },
    ]
  },
  {
    category: "Construcción y Decoración",
    color: "#6A1B9A",
    mods: [
      { name:"Chisel & Bits",      version:"21.0.0",    desc:"Esculpe bloques con precisión de microbloque. Ideal para builds detallados.",       url:"https://modrinth.com/mod/chisels-and-bits", required:false },
      { name:"Macaw's Furniture",  version:"3.3.0",     desc:"Más de 200 muebles decorativos: sofás, estantes, lámparas y mucho más.",           url:"https://modrinth.com/mod/macaws-furniture", required:false },
      { name:"Supplementaries",    version:"21.0.0",    desc:"Decoración vanilla-friendly: faroles, cuerdas, postes y elementos rurales.",       url:"https://modrinth.com/mod/supplementaries", required:false },
    ]
  },
  {
    category: "Mecánicas de Juego",
    color: "#BF360C",
    mods: [
      { name:"Farmer's Delight",   version:"6.0.0",     desc:"Amplía la agricultura y la cocina con cultivos, recetas y utensilios nuevos.",     url:"https://modrinth.com/mod/farmers-delight", required:false },
      { name:"Create",             version:"0.5.1",     desc:"Automatización steampunk con engranajes, correas y máquinas mecánicas.",           url:"https://modrinth.com/mod/create", required:false },
      { name:"Iron Furnaces",      version:"3.6.0",     desc:"Hornos mejorados de varios materiales con mayor velocidad y eficiencia.",          url:"https://modrinth.com/mod/iron-furnaces", required:false },
    ]
  },
];

/* ── NORMAS (para la página /rules) ──────────────────────────────────────── */
const RULES = [
  {
    category: "Convivencia",
    icon: "💬",
    color: "#2E7D32",
    rules: [
      "Trata a todos los jugadores con respeto. El insulto o acoso resulta en sanción inmediata.",
      "Está prohibido el lenguaje ofensivo, discriminatorio o de contenido explícito en el chat.",
      "No hagas spam ni publicidad de otros servidores o servicios.",
      "Mantén los mensajes en el chat general en español o inglés.",
    ]
  },
  {
    category: "Juego Limpio",
    icon: "⚔",
    color: "#1565C0",
    rules: [
      "Está prohibido el uso de hacks, cheats, x-ray o cualquier modificación que dé ventaja injusta.",
      "El griefing (destruir construcciones ajenas) está totalmente prohibido.",
      "No robes de cofres o granjas de otros jugadores sin permiso explícito.",
      "El PvP solo está permitido en zonas habilitadas o con consentimiento mutuo.",
      "No explotes bugs del juego ni del servidor. Repórtalos a un Admin.",
    ]
  },
  {
    category: "Construcciones",
    icon: "🏗",
    color: "#6A1B9A",
    rules: [
      "Respeta un mínimo de 100 bloques de distancia entre construcciones de diferentes jugadores.",
      "No construyas cerca del spawn sin autorización de un Admin.",
      "Las construcciones abandonadas pueden ser eliminadas tras 30 días de inactividad.",
    ]
  },
  {
    category: "Waystones",
    icon: "🗺",
    color: "#BF360C",
    rules: [
      "No destruyas waystones ajenas. Cada jugador puede colocar un máximo de 3.",
      "Los nombres de waystones deben ser identificativos y no ofensivos.",
      "Los waystones globales son administrados exclusivamente por los Admins.",
    ]
  },
  {
    category: "Sanciones",
    icon: "⚠",
    color: "#E65100",
    rules: [
      "Nivel 1 — Advertencia verbal: aviso informal por infracción leve.",
      "Nivel 2 — Advertencia formal: queda registrada en el historial del jugador.",
      "Nivel 3 — Mute temporal: silenciado del chat durante 24–72 horas.",
      "Nivel 4 — Kick + Jail: expulsión de sesión y encarcelamiento temporal.",
      "Nivel 5 — Ban temporal: exclusión del servidor de 3 a 30 días.",
      "Nivel 6 — Ban permanente: para infracciones muy graves o reincidencia extrema.",
    ]
  },
];

/* ============================================================
   README — CÓMO CONECTAR AL SERVIDOR REAL
   ============================================================

   OPCIÓN A — API PÚBLICA (sin backend, gratis):
   ─────────────────────────────────────────────
   mcsrvstat.us ofrece una API REST gratuita que devuelve
   información del servidor en tiempo real.

   Endpoint: https://api.mcsrvstat.us/3/TU_IP:PUERTO

   En index.html, sustituye la función loadOnlinePlayers() por:

     async function loadOnlinePlayers() {
       const res  = await fetch('https://api.mcsrvstat.us/3/play.miservermc.es');
       const data = await res.json();
       // data.players.list → array de { name, uuid }
       // data.players.online → número de jugadores conectados
       // data.players.max    → máximo de slots
       // data.online         → true/false
       return data;
     }

   Luego cruza data.players.list con ALL_PLAYERS para
   obtener roles y tiempos.

   OPCIÓN B — Backend propio con plugin (recomendado):
   ───────────────────────────────────────────────────
   1. Instala el plugin "Plan" (https://www.spigotmc.org/resources/plan.32536/)
      en tu servidor Spigot/Paper. Genera automáticamente
      un panel web con todas las estadísticas.

   2. O instala "dynmap" para mapa en tiempo real del mundo.

   3. Para un endpoint propio mínimo, crea un plugin que
      exponga /players.json con los jugadores conectados y
      sus stats. Ejemplo PHP sencillo si tienes panel web:

        <?php
        $data = file_get_contents('rcon://tu_ip:25575');
        header('Content-Type: application/json');
        echo json_encode($data);

   OPCIÓN C — Actualizaciones manuales (más sencillo):
   ───────────────────────────────────────────────────
   Edita ONLINE_PLAYERS y ALL_PLAYERS en este archivo
   data.js cada vez que quieras actualizar la web.
   Sube los archivos a cualquier hosting estático
   (GitHub Pages, Netlify, Vercel — todos gratuitos).

   ============================================================ */
