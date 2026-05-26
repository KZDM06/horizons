// ─── Search page logic ──────────────────────────────────────────

const LOADING_MESSAGES = [
  'Analyse de votre demande…',
  'Recherche des meilleures destinations…',
  'Sélection des vols disponibles…',
  'Choix des hôtels parfaits…',
  'Curation des activités locales…',
  'Calcul du budget optimisé…',
  'Finalisation de votre itinéraire…',
  'Dernières touches…'
];

let loadingTimer = null;

// ─── On load ────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  if (!getApiKey()) {
    document.getElementById('apiWarning').style.display = 'flex';
  }

  // Restore last params if user comes back
  const last = sessionStorage.getItem('horizons_params');
  if (last) {
    try {
      const p = JSON.parse(last);
      if (p.dest) document.getElementById('dest').value = p.dest;
      if (p.dateFrom) document.getElementById('dateFrom').value = p.dateFrom;
      if (p.dateTo) document.getElementById('dateTo').value = p.dateTo;
      if (p.pax) document.getElementById('pax').value = p.pax;
      if (p.bdgt) document.getElementById('bdgt').value = p.bdgt;
      if (p.cls) document.getElementById('cls').value = p.cls;
      if (p.freeText) document.getElementById('freeText').value = p.freeText;
    } catch(e) {}
  }

  // Set default dates (2 weeks from now, +7 days)
  const today = new Date();
  const from = new Date(today); from.setDate(from.getDate() + 14);
  const to = new Date(from); to.setDate(to.getDate() + 7);
  if (!document.getElementById('dateFrom').value)
    document.getElementById('dateFrom').value = from.toISOString().split('T')[0];
  if (!document.getElementById('dateTo').value)
    document.getElementById('dateTo').value = to.toISOString().split('T')[0];

  // Enter key on textarea
  document.getElementById('freeText').addEventListener('keydown', e => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) startGenerate();
  });
});

// ─── Chips ──────────────────────────────────────────────────────
function setChip(el) {
  document.getElementById('freeText').value = el.textContent.trim();
  document.getElementById('freeText').focus();
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}

// ─── Generate ───────────────────────────────────────────────────
async function startGenerate() {
  const apiKey = getApiKey();
  if (!apiKey) {
    openApiModal();
    return;
  }

  const params = collectParams();
  sessionStorage.setItem('horizons_params', JSON.stringify(params));

  // Show loading overlay
  showLoadingOverlay();

  try {
    const prompt = buildUserPrompt(params);
    const trip = await callAnthropicAPI(prompt);

    // Store trip A and navigate
    sessionStorage.setItem('horizons_tripA', JSON.stringify(trip));
    sessionStorage.setItem('horizons_tripB', '');
    window.location.href = 'results.html';

  } catch(err) {
    hideLoadingOverlay();
    if (err.message === 'NO_API_KEY') {
      openApiModal();
    } else {
      showToast('Erreur : ' + err.message);
      console.error(err);
    }
  }
}

function collectParams() {
  const from = document.getElementById('dateFrom').value;
  const to = document.getElementById('dateTo').value;
  let days = 5;
  if (from && to) {
    const diff = (new Date(to) - new Date(from)) / (1000 * 60 * 60 * 24);
    if (diff > 0) days = Math.round(diff);
  }
  return {
    dest: document.getElementById('dest').value.trim(),
    dateFrom: from,
    dateTo: to,
    pax: document.getElementById('pax').value,
    bdgt: document.getElementById('bdgt').value,
    cls: document.getElementById('cls').value,
    freeText: document.getElementById('freeText').value.trim(),
    days
  };
}

// ─── Loading overlay ────────────────────────────────────────────
function showLoadingOverlay() {
  const overlay = document.getElementById('loadingOverlay');
  overlay.style.display = 'flex';
  document.getElementById('genBtn').disabled = true;

  let i = 0;
  const msgEl = document.getElementById('loadingMsg');
  msgEl.textContent = LOADING_MESSAGES[0];
  loadingTimer = setInterval(() => {
    i = (i + 1) % LOADING_MESSAGES.length;
    msgEl.textContent = LOADING_MESSAGES[i];
  }, 1800);
}

function hideLoadingOverlay() {
  clearInterval(loadingTimer);
  document.getElementById('loadingOverlay').style.display = 'none';
  document.getElementById('genBtn').disabled = false;
}
