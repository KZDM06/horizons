// ─── Results page logic ─────────────────────────────────────────

const LOADING_MESSAGES = [
  'Analyse de votre demande…',
  'Recherche des destinations idéales…',
  'Sélection des vols…',
  'Choix des meilleurs hôtels…',
  'Curation des activités locales…',
  'Calcul du budget…',
  'Finalisation de votre itinéraire…',
];

let loadMsgTimer = null;
let tripA = null;
let tripB = null;
let currentParams = null;

// ─── On load ────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  currentParams = JSON.parse(sessionStorage.getItem('horizons_params') || '{}');

  // Try to load already-generated tripA from sessionStorage
  const storedA = sessionStorage.getItem('horizons_tripA');
  if (storedA) {
    try {
      tripA = JSON.parse(storedA);
      showTrip(tripA);
      return;
    } catch(e) {}
  }

  // Otherwise show error
  showError('Aucune donnée de voyage trouvée. Revenez à la page de recherche.');
});

// ─── Show a successfully generated trip ─────────────────────────
function showTrip(trip) {
  document.getElementById('loadingState').style.display = 'none';
  document.getElementById('tripsContainer').style.display = 'block';
  renderPanel(document.getElementById('panelA'), trip);
  document.getElementById('altBtn').style.display = 'inline-flex';
  document.title = `${trip.destination || 'Voyage'} — Horizons`;
}

// ─── Generate alternative trip ──────────────────────────────────
async function generateAlt() {
  if (!getApiKey()) { openApiModal?.(); return; }
  if (!tripA) return;

  document.getElementById('altBtn').style.display = 'none';
  document.getElementById('altLoadingBar').style.display = 'flex';
  document.getElementById('compareToggleWrap').style.display = 'none';

  try {
    const prompt = buildAltPrompt(currentParams, tripA.destination);
    tripB = await callAnthropicAPI(prompt);

    sessionStorage.setItem('horizons_tripB', JSON.stringify(tripB));
    renderPanel(document.getElementById('panelB'), tripB);

    document.getElementById('csLabelA').textContent = tripA.destination || 'Voyage A';
    document.getElementById('csLabelB').textContent = tripB.destination || 'Voyage B';
    document.getElementById('compareToggleWrap').style.display = 'block';
    document.getElementById('compareSlider').value = 0;
    document.getElementById('tripsInner').style.transform = 'translateX(0%)';

    showToast(`Alternative générée : ${tripB.destination}`);
  } catch(err) {
    document.getElementById('altBtn').style.display = 'inline-flex';
    showToast('Erreur : ' + err.message);
    console.error(err);
  } finally {
    document.getElementById('altLoadingBar').style.display = 'none';
  }
}

// ─── Slider ─────────────────────────────────────────────────────
function onSlider(value) {
  const pct = parseFloat(value);
  document.getElementById('tripsInner').style.transform = `translateX(-${pct}%)`;
}

// ─── Loading state ──────────────────────────────────────────────
function startLoadingUI() {
  document.getElementById('loadingState').style.display = 'flex';
  document.getElementById('tripsContainer').style.display = 'none';
  document.getElementById('errorState').style.display = 'none';

  let i = 0;
  const msgEl = document.getElementById('loadingMsg');
  msgEl.textContent = LOADING_MESSAGES[0];
  loadMsgTimer = setInterval(() => {
    i = (i + 1) % LOADING_MESSAGES.length;
    msgEl.textContent = LOADING_MESSAGES[i];
  }, 1800);
}

// ─── Error state ────────────────────────────────────────────────
function showError(msg) {
  clearInterval(loadMsgTimer);
  document.getElementById('loadingState').style.display = 'none';
  document.getElementById('tripsContainer').style.display = 'none';
  document.getElementById('errorState').style.display = 'flex';
  document.getElementById('errorMsg').textContent = msg || 'Erreur inconnue.';
}
