// ─── Render a complete trip panel ──────────────────────────────

function renderPanel(containerEl, trip) {
  containerEl.innerHTML = '';

  const imgQuery = encodeURIComponent(trip.unsplash_query || trip.destination || 'travel landscape');
  const imgUrl = `https://source.unsplash.com/featured/1200x500/?${imgQuery}`;

  // ── Hero ──
  const hero = document.createElement('div');
  hero.className = 'trip-hero';
  hero.innerHTML = `
    <img src="${imgUrl}" alt="${esc(trip.destination)}"
      onerror="this.src='https://source.unsplash.com/featured/1200x500/?travel,landscape'">
    <div class="trip-hero-body">
      <div class="trip-title">${esc(trip.title || trip.destination)}</div>
      <div class="trip-badges">
        ${trip.destination ? badge('blue', 'ti-map-pin', trip.destination) : ''}
        ${trip.duration    ? badge('green', 'ti-calendar', trip.duration) : ''}
        ${trip.season      ? badge('amber', 'ti-sun', trip.season) : ''}
        ${trip.vibe        ? badge('purple', 'ti-heart', trip.vibe) : ''}
      </div>
    </div>`;
  containerEl.appendChild(hero);

  // ── Sections ──
  containerEl.appendChild(makeSection('ic-flight', 'ti-plane', 'Vols', renderFlights(trip.flights), trip.flights?.length));
  containerEl.appendChild(makeSection('ic-hotel', 'ti-building', 'Hôtels', renderHotels(trip.hotels), trip.hotels?.length));
  containerEl.appendChild(makeSection('ic-act', 'ti-map-pin', 'Activités', renderActivities(trip.activities), trip.activities?.length));
  containerEl.appendChild(makeSection('ic-food', 'ti-tools-kitchen-2', 'Restaurants', renderRestaurants(trip.restaurants), trip.restaurants?.length));
  containerEl.appendChild(makeSection('ic-budget', 'ti-coin', 'Budget détaillé', renderBudget(trip.budget)));
  containerEl.appendChild(makeSection('ic-iti', 'ti-calendar', 'Itinéraire jour par jour', renderItinerary(trip.itinerary), trip.itinerary?.length + ' jours'));
  containerEl.appendChild(makeSection('ic-map', 'ti-map', 'Carte', renderMap(trip)));
  containerEl.appendChild(makeSection('ic-tips', 'ti-info-circle', 'Conseils pratiques', renderTips(trip.tips)));

  // ── Toggle behaviour ──
  containerEl.querySelectorAll('.section-head').forEach(head => {
    head.addEventListener('click', () => {
      const body = head.nextElementSibling;
      const tog = head.querySelector('.section-toggle');
      const isOpen = body.classList.contains('open');
      body.classList.toggle('open', !isOpen);
      tog.classList.toggle('open', !isOpen);
    });
  });

  // Open first section (flights) by default
  const firstBody = containerEl.querySelector('.section-body');
  const firstTog  = containerEl.querySelector('.section-toggle');
  if (firstBody) { firstBody.classList.add('open'); firstTog.classList.add('open'); }
}

// ─── Section wrapper ────────────────────────────────────────────
function makeSection(iconCls, iconName, title, bodyHtml, count) {
  const block = document.createElement('div');
  block.className = 'section-block';
  const countBadge = count !== undefined ? `<span class="section-count">(${count})</span>` : '';
  block.innerHTML = `
    <div class="section-head" role="button" aria-expanded="false">
      <div class="section-head-icon ${iconCls}"><i class="ti ti-${iconName}"></i></div>
      <span class="section-title">${title}${countBadge}</span>
      <i class="ti ti-chevron-down section-toggle"></i>
    </div>
    <div class="section-body">${bodyHtml}</div>`;
  return block;
}

// ─── Flights ────────────────────────────────────────────────────
function renderFlights(flights = []) {
  if (!flights.length) return '<p class="mc-sub">Aucun vol disponible.</p>';
  return flights.map(f => `
    <div class="mini-card">
      <div class="mc-top">
        <span class="mc-name"><i class="ti ti-plane"></i> ${esc(f.type)} — ${esc(f.route)}</span>
        <span class="mc-price">${fmt(f.price_pp)}€ <small style="font-weight:400;color:var(--gray-4)">/pers</small></span>
      </div>
      <div class="mc-sub">${esc(f.airline)} · ${esc(f.dep)} → ${esc(f.arr)} · ${esc(f.duration)} · ${esc(f.stops)}</div>
      ${f.tip ? `<div class="mc-tip">💡 ${esc(f.tip)}</div>` : ''}
    </div>`).join('');
}

// ─── Hotels ─────────────────────────────────────────────────────
function renderHotels(hotels = []) {
  if (!hotels.length) return '<p class="mc-sub">Aucun hôtel disponible.</p>';
  return hotels.map(h => `
    <div class="mini-card">
      <div class="mc-top">
        <span class="mc-name">${esc(h.name)} <span style="color:#BA7517">${'★'.repeat(Math.min(h.stars||3,5))}</span></span>
        <span class="mc-price">${fmt(h.price_night)}€ <small style="font-weight:400;color:var(--gray-4)">/nuit</small></span>
      </div>
      <div class="mc-sub">${esc(h.area)} · ${esc(h.style)}</div>
      <div class="mc-tags">${(h.perks||[]).map(p => `<span class="mc-tag">${esc(p)}</span>`).join('')}</div>
      ${h.tip ? `<div class="mc-tip">💡 ${esc(h.tip)}</div>` : ''}
    </div>`).join('');
}

// ─── Activities ─────────────────────────────────────────────────
function renderActivities(activities = []) {
  if (!activities.length) return '<p class="mc-sub">Aucune activité disponible.</p>';
  return activities.map(a => `
    <div class="mini-card">
      <div class="mc-top">
        <span class="mc-name">
          ${esc(a.name)}
          ${a.must ? `<span class="badge badge-coral" style="font-size:10px;margin-left:4px">À faire</span>` : ''}
        </span>
        <span class="mc-price">${a.price_pp > 0 ? fmt(a.price_pp) + '€' : 'Gratuit'}</span>
      </div>
      <div class="mc-sub">${esc(a.category)} · ${esc(a.duration)} · Idéal : ${esc(a.when)}</div>
      <div class="mc-sub" style="margin-top:5px">${esc(a.desc)}</div>
    </div>`).join('');
}

// ─── Restaurants ────────────────────────────────────────────────
function renderRestaurants(restaurants = []) {
  if (!restaurants.length) return '<p class="mc-sub">Aucun restaurant disponible.</p>';
  return restaurants.map(r => `
    <div class="mini-card">
      <div class="mc-top">
        <span class="mc-name">${esc(r.name)}</span>
        <span class="mc-price">${esc(r.price)}</span>
      </div>
      <div class="mc-sub">${esc(r.cuisine)} · ${esc(r.area)}</div>
      <div class="mc-sub" style="margin-top:5px">Spécialité : <strong>${esc(r.specialty)}</strong></div>
      ${r.tip ? `<div class="mc-tip">💡 ${esc(r.tip)}</div>` : ''}
    </div>`).join('');
}

// ─── Budget ─────────────────────────────────────────────────────
function renderBudget(b = {}) {
  const total = Math.round(
    (b.flights||0) + (b.hotels||0) + (b.activities||0) +
    (b.food||0) + (b.transport||0) + (b.misc||0)
  );
  const lines = [
    ['Vols',        b.flights,    '#378ADD'],
    ['Hôtels',      b.hotels,     '#7F77DD'],
    ['Activités',   b.activities, '#1D9E75'],
    ['Restauration',b.food,       '#BA7517'],
    ['Transport',   b.transport,  '#888780'],
    ['Divers',      b.misc,       '#D4537E'],
  ];
  const bars = lines.map(([label, val, color]) => {
    const pct = total > 0 ? Math.round(((val||0) / total) * 100) : 0;
    return `
      <div class="budget-row">
        <span class="budget-label">${label}</span>
        <div class="budget-track"><div class="budget-fill" style="width:${pct}%;background:${color}"></div></div>
        <span class="budget-amount">${fmt(val||0)}€</span>
      </div>`;
  }).join('');
  return `
    ${bars}
    <div class="budget-total">
      <span>Total estimé</span>
      <span>${fmt(total)}€</span>
    </div>
    ${b.note ? `<div class="budget-note">ℹ️ ${esc(b.note)}</div>` : ''}`;
}

// ─── Itinerary ──────────────────────────────────────────────────
function renderItinerary(itinerary = []) {
  if (!itinerary.length) return '<p class="mc-sub">Itinéraire non disponible.</p>';
  return itinerary.map(day => `
    <div class="iti-day">
      <div class="iti-day-label">Jour ${day.day} — ${esc(day.label)}</div>
      <div class="iti-items">
        ${(day.items||[]).map(item => `
          <div class="iti-item">
            <span class="iti-time">${esc(item.time||'')}</span>
            <span class="iti-act">${esc(item.act)}</span>
          </div>`).join('')}
      </div>
    </div>`).join('');
}

// ─── Map (SVG) ──────────────────────────────────────────────────
function renderMap(trip) {
  const lat = parseFloat(trip.lat) || 48.8;
  const lng = parseFloat(trip.lng) || 2.35;
  const W = 400, H = 200;
  const cx = Math.round(((lng + 180) / 360) * W);
  const cy = Math.round(((90 - lat) / 180) * H);
  const safeCx = Math.max(10, Math.min(W - 10, cx));
  const safeCy = Math.max(10, Math.min(H - 10, cy));

  return `
    <div class="map-wrap">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
        <rect width="${W}" height="${H}" fill="#f0f0ee"/>
        <!-- Continents simplified -->
        <ellipse cx="200" cy="100" rx="195" ry="93" fill="#e8e8e2" stroke="#d8d8d2" stroke-width=".5"/>
        <ellipse cx="60"  cy="82"  rx="35" ry="22" fill="#d4d4ce" opacity=".8"/>
        <ellipse cx="200" cy="72"  rx="55" ry="36" fill="#d4d4ce" opacity=".8"/>
        <ellipse cx="295" cy="72"  rx="28" ry="22" fill="#d4d4ce" opacity=".8"/>
        <ellipse cx="330" cy="108" rx="22" ry="28" fill="#d4d4ce" opacity=".8"/>
        <ellipse cx="125" cy="105" rx="28" ry="18" fill="#d4d4ce" opacity=".8"/>
        <ellipse cx="135" cy="135" rx="18" ry="24" fill="#d4d4ce" opacity=".8"/>
        <!-- Marker -->
        <circle cx="${safeCx}" cy="${safeCy}" r="10" fill="#E24B4A" opacity=".25"/>
        <circle cx="${safeCx}" cy="${safeCy}" r="5"  fill="#E24B4A"/>
        <circle cx="${safeCx}" cy="${safeCy}" r="2"  fill="#fff"/>
        <text x="${safeCx + 12}" y="${safeCy + 4}" font-size="10" fill="#1c1c1e" font-family="sans-serif">${esc(trip.destination || '')}</text>
      </svg>
      <div class="map-coords">${lat.toFixed(2)}°N, ${lng.toFixed(2)}°E</div>
    </div>`;
}

// ─── Tips ────────────────────────────────────────────────────────
function renderTips(tips = {}) {
  const items = [
    { icon: 'ti-id', label: 'Visa',     val: tips.visa },
    { icon: 'ti-cloud', label: 'Météo', val: tips.weather },
    { icon: 'ti-coin', label: 'Monnaie',val: tips.currency },
    { icon: 'ti-clock', label: 'Fuseau',val: tips.timezone },
    { icon: 'ti-message', label: 'Langue', val: tips.language },
    { icon: 'ti-phone', label: 'Urgences', val: tips.emergency },
  ].filter(i => i.val);

  if (!items.length) return '<p class="mc-sub">Aucun conseil disponible.</p>';
  return `<div class="tips-grid">${items.map(i => `
    <div class="tip-card">
      <i class="ti ${i.icon}"></i>
      <div class="tip-label">${i.label}</div>
      <div class="tip-val">${esc(i.val)}</div>
    </div>`).join('')}</div>`;
}

// ─── Helpers ────────────────────────────────────────────────────
function badge(color, icon, text) {
  return `<span class="badge badge-${color}"><i class="ti ti-${icon}"></i> ${esc(text)}</span>`;
}

function esc(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function fmt(n) {
  return Math.round(Number(n) || 0).toLocaleString('fr-FR');
}
