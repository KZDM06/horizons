// ─── API key management ───────────────────────────────────────────
const API_KEY_STORAGE = 'horizons_api_key';

function getApiKey() {
  return localStorage.getItem(API_KEY_STORAGE) || '';
}

function saveApiKey() {
  const key = document.getElementById('apiKeyInput').value.trim();
  if (!key) return;
  localStorage.setItem(API_KEY_STORAGE, key);
  closeApiModal();
  document.getElementById('apiWarning') && (document.getElementById('apiWarning').style.display = 'none');
  showToast('Clé API enregistrée');
}

function openApiModal() {
  const modal = document.getElementById('apiModal');
  if (!modal) return;
  modal.style.display = 'flex';
  const input = document.getElementById('apiKeyInput');
  input.value = getApiKey();
  setTimeout(() => input.focus(), 100);
}

function closeApiModal(e) {
  if (e && e.target !== document.getElementById('apiModal')) return;
  const modal = document.getElementById('apiModal');
  if (modal) modal.style.display = 'none';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeApiModal();
});

// ─── Toast notification ──────────────────────────────────────────
function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position: 'fixed', bottom: '1.5rem', right: '1.5rem',
    background: '#1c1c1e', color: '#fff', padding: '10px 18px',
    borderRadius: '30px', fontSize: '13px', zIndex: '999',
    opacity: '0', transition: 'opacity .2s', pointerEvents: 'none'
  });
  document.body.appendChild(t);
  requestAnimationFrame(() => { t.style.opacity = '1'; });
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 2500);
}

// ─── System prompt for AI ────────────────────────────────────────
const SYSTEM_PROMPT = `Tu es un expert planificateur de voyages créatif et enthousiaste.
À chaque appel génère un voyage UNIQUE, différent des précédents, avec des détails originaux et inspirants.
Réponds UNIQUEMENT en JSON valide. Pas de texte avant ou après. Pas de backticks. Pas de commentaires.

Format JSON attendu :
{
  "destination": "Ville, Pays",
  "country_code": "JP",
  "lat": 35.68,
  "lng": 139.69,
  "title": "Titre accrocheur et poétique du voyage",
  "duration": "8 jours",
  "season": "Avril–Mai",
  "vibe": "Culture & Gastronomie",
  "unsplash_query": "tokyo japan street",
  "flights": [
    {
      "type": "Aller",
      "airline": "Swiss Air",
      "route": "GVA → NRT",
      "dep": "10:35",
      "arr": "06:20+1",
      "duration": "12h45",
      "stops": "Direct",
      "price_pp": 680,
      "tip": "Réserver 3 mois à l'avance pour ce tarif"
    }
  ],
  "hotels": [
    {
      "name": "Hotel Gracery Shinjuku",
      "stars": 4,
      "area": "Shinjuku",
      "style": "Boutique moderne",
      "price_night": 145,
      "perks": ["Vue sur la ville", "Petit-déjeuner inclus", "Onsen sur le toit"],
      "tip": "Demandez une chambre côté est pour la vue sur le mont Fuji"
    }
  ],
  "activities": [
    {
      "name": "Visite du quartier d'Asakusa",
      "category": "Culture",
      "duration": "3h",
      "price_pp": 0,
      "when": "Tôt le matin",
      "desc": "Explorez le plus ancien quartier de Tokyo avant l'arrivée des foules",
      "must": true
    }
  ],
  "restaurants": [
    {
      "name": "Ichiran Ramen",
      "cuisine": "Ramen japonais",
      "price": "€€",
      "specialty": "Ramen tonkotsu en cabine individuelle",
      "area": "Shibuya",
      "tip": "Commandez via le distributeur à l'entrée, expérience unique"
    }
  ],
  "budget": {
    "flights": 1360,
    "hotels": 1160,
    "activities": 280,
    "food": 400,
    "transport": 120,
    "misc": 180,
    "currency": "EUR",
    "note": "Budget pour 2 personnes, 8 nuits. Vols aller-retour inclus."
  },
  "itinerary": [
    {
      "day": 1,
      "label": "Arrivée & premier quartier",
      "items": [
        { "time": "14:00", "act": "Atterrissage à Narita, transfert express vers le centre" },
        { "time": "17:00", "act": "Installation à l'hôtel, premiers pas dans Shinjuku" },
        { "time": "20:00", "act": "Dîner dans une izakaya locale" }
      ]
    }
  ],
  "tips": {
    "visa": "Visa non requis pour les ressortissants français (90j)",
    "weather": "Printemps doux 15–22°C, cerisiers en fleurs en avril",
    "currency": "Yen japonais (JPY). 1€ ≈ 160¥. Espèces conseillées.",
    "timezone": "UTC+9 (7h d'avance sur Paris)",
    "language": "Japonais. Applications de traduction très utiles.",
    "emergency": "Police : 110 — Secours : 119"
  }
}`;

// ─── Core API call ───────────────────────────────────────────────
async function callAnthropicAPI(userMessage) {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('NO_API_KEY');

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }]
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `HTTP ${response.status}`);
  }

  const data = await response.json();
  const raw = data.content?.filter(b => b.type === 'text').map(b => b.text).join('') || '';
  const clean = raw.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}

// ─── Build user prompt from form/params ─────────────────────────
function buildUserPrompt(params) {
  const seed = Math.random().toString(36).slice(2, 10);
  return `[Session: ${seed}]
Destination souhaitée : ${params.dest || 'laissez-vous surprendre'}
Dates : ${params.dateFrom || '?'} → ${params.dateTo || '?'}
Voyageurs : ${params.pax || '2 adultes'}
Budget : ${params.bdgt || 'moyen'}
Classe vol : ${params.cls || 'économique'}
Description libre : "${params.freeText || 'voyage mémorable et original'}"

Génère un voyage complet avec minimum :
- 2 vols (aller + retour)
- 2 hôtels différents
- 6 activités variées (dont 2 must-do)
- 3 restaurants
- Itinéraire sur ${params.days || 5} jours avec créneaux horaires
Sois créatif, inspirant, et propose des détails inattendus qui donnent envie.`;
}

function buildAltPrompt(params, previousDestination) {
  const seed = Math.random().toString(36).slice(2, 10);
  return `[Session: ${seed}]
IMPORTANT : Génère un voyage ALTERNATIF et DIFFÉRENT de "${previousDestination}".
Propose une destination différente ou un angle radicalement différent du même type de voyage.
Voyageurs : ${params.pax || '2 adultes'}
Budget : ${params.bdgt || 'moyen'}
Classe vol : ${params.cls || 'économique'}
Description libre : "${params.freeText || 'voyage surprenant et original'}"

Même structure JSON, mais voyage totalement différent. Sois audacieux dans ta suggestion.
Minimum : 2 vols, 2 hôtels, 6 activités, 3 restaurants, itinéraire 5 jours.`;
}
