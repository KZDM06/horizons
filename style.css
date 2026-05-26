/* ─── Reset & base ─── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --black: #1c1c1e;
  --gray-1: #f5f5f5;
  --gray-2: #e8e8e8;
  --gray-3: #d0d0d0;
  --gray-4: #888;
  --gray-5: #555;
  --white: #fff;
  --accent: #1c1c1e;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,.1);
  --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

html { font-size: 16px; -webkit-font-smoothing: antialiased; }
body { font-family: var(--font); background: var(--gray-1); color: var(--black); line-height: 1.6; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; border: none; background: none; }
input, select, textarea { font-family: inherit; font-size: 14px; }
img { display: block; max-width: 100%; }

/* ─── Layout ─── */
.container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.container--narrow { max-width: 720px; margin: 0 auto; padding: 0 1.5rem; display: block; }

/* ─── Header ─── */
.site-header { background: var(--white); border-bottom: 1px solid var(--gray-2); height: 56px; }
.site-header--sticky { position: sticky; top: 0; z-index: 100; }

.brand { display: flex; align-items: center; gap: 8px; }
.brand-dot { width: 8px; height: 8px; background: var(--black); border-radius: 50%; flex-shrink: 0; }
.brand-name { font-size: 15px; font-weight: 600; letter-spacing: -0.3px; }
.brand-tag { font-size: 12px; color: var(--gray-4); }
.header-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }

/* ─── Buttons ─── */
.btn-primary {
  display: inline-flex; align-items: center; justify-content: center; gap: 7px;
  background: var(--black); color: #fff; border-radius: var(--radius-md);
  padding: 9px 18px; font-size: 14px; font-weight: 500; transition: background .15s, transform .1s;
}
.btn-primary:hover { background: #3a3a3c; }
.btn-primary:active { transform: scale(.98); }
.btn-primary.btn-xl { width: 100%; padding: 13px; font-size: 15px; margin-top: 12px; border-radius: var(--radius-md); }

.btn-outline {
  display: inline-flex; align-items: center; gap: 6px;
  border: 1px solid var(--gray-3); border-radius: var(--radius-md);
  padding: 8px 14px; font-size: 13px; font-weight: 500; color: var(--black);
  background: var(--white); transition: background .15s, border-color .15s;
}
.btn-outline:hover { background: var(--gray-1); border-color: var(--gray-4); }

.btn-ghost {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 7px 12px; font-size: 13px; color: var(--gray-5);
  border-radius: var(--radius-sm); transition: background .15s, color .15s;
}
.btn-ghost:hover { background: var(--gray-1); color: var(--black); }
.btn-icon { padding: 6px; }

/* ─── Hero / Search ─── */
.hero-section { padding: 3rem 0 4rem; }

.hero-title {
  font-size: clamp(28px, 5vw, 42px); font-weight: 700; letter-spacing: -1px;
  line-height: 1.15; margin-bottom: 1rem; color: var(--black);
}
.hero-sub { font-size: 16px; color: var(--gray-5); margin-bottom: 2rem; line-height: 1.6; max-width: 560px; }

.search-card {
  background: var(--white); border-radius: var(--radius-xl);
  border: 1px solid var(--gray-2); padding: 1.5rem; box-shadow: var(--shadow-md);
  margin-bottom: 2rem;
}

.form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-bottom: 1rem; }

.field label {
  display: flex; align-items: center; gap: 5px;
  font-size: 11px; font-weight: 600; color: var(--gray-4);
  text-transform: uppercase; letter-spacing: .5px; margin-bottom: 5px;
}
.field label i { font-size: 13px; }
.field input, .field select {
  width: 100%; padding: 9px 11px; border: 1px solid var(--gray-2);
  border-radius: var(--radius-sm); background: var(--gray-1); color: var(--black);
  transition: border-color .15s, background .15s;
}
.field input:focus, .field select:focus { outline: none; border-color: var(--black); background: var(--white); }

.divider {
  display: flex; align-items: center; gap: 12px;
  font-size: 11px; color: var(--gray-4); text-transform: uppercase; letter-spacing: .5px;
  margin: 1rem 0 .75rem;
}
.divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--gray-2); }

.chips { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 12px; }
.chip {
  font-size: 12px; padding: 5px 13px; border-radius: 20px;
  border: 1px solid var(--gray-2); background: var(--white); color: var(--gray-5);
  transition: all .15s; white-space: nowrap;
}
.chip:hover { border-color: var(--black); color: var(--black); background: var(--gray-1); }

textarea {
  width: 100%; padding: 11px 13px; border: 1px solid var(--gray-2);
  border-radius: var(--radius-sm); background: var(--gray-1); color: var(--black);
  resize: none; line-height: 1.6; transition: border-color .15s, background .15s;
}
textarea:focus { outline: none; border-color: var(--black); background: var(--white); }

.api-warning {
  display: flex; align-items: center; gap: 8px;
  background: #fff8e6; border: 1px solid #f5c842; border-radius: var(--radius-sm);
  padding: 10px 14px; font-size: 13px; color: #7a5c00; margin-top: 10px;
}
.api-warning button { color: #1c6ef3; font-weight: 500; text-decoration: underline; background: none; border: none; cursor: pointer; }

/* ─── How it works ─── */
.how-it-works {
  display: flex; align-items: center; justify-content: center; gap: 12px;
  flex-wrap: wrap;
}
.hiw-item {
  display: flex; align-items: center; gap: 7px;
  font-size: 13px; color: var(--gray-5);
}
.hiw-item i { font-size: 18px; color: var(--gray-3); }
.hiw-arrow { color: var(--gray-3); font-size: 16px; }

/* ─── Loading overlay (index) ─── */
.loading-overlay {
  position: fixed; inset: 0; background: rgba(255,255,255,.92);
  display: flex; align-items: center; justify-content: center; z-index: 200;
}
.loading-box { text-align: center; }
.loading-msg { font-size: 16px; font-weight: 500; color: var(--black); margin-top: 1.25rem; margin-bottom: 6px; }
.loading-sub { font-size: 13px; color: var(--gray-4); }

/* ─── Spinner ─── */
.spinner {
  width: 36px; height: 36px; border: 2.5px solid var(--gray-2);
  border-top-color: var(--black); border-radius: 50%;
  animation: spin .8s linear infinite; margin: 0 auto;
}
.spinner--lg { width: 48px; height: 48px; border-width: 3px; }
.spinner--sm { width: 18px; height: 18px; border-width: 2px; flex-shrink: 0; }
@keyframes spin { to { transform: rotate(360deg); } }

/* ─── Modal ─── */
.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,.4);
  display: flex; align-items: center; justify-content: center; z-index: 300; padding: 1rem;
}
.modal {
  background: var(--white); border-radius: var(--radius-lg);
  padding: 1.5rem; width: 100%; max-width: 440px; box-shadow: var(--shadow-md);
}
.modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.modal-head h2 { font-size: 17px; font-weight: 600; }
.modal-desc { font-size: 13px; color: var(--gray-5); margin-bottom: 1rem; line-height: 1.6; }
.modal-footer { display: flex; align-items: center; justify-content: flex-end; gap: 10px; margin-top: 1.25rem; }

/* ─── Results page ─── */
.results-main { padding: 1.5rem 0 4rem; }

.page-loading, .page-error {
  text-align: center; padding: 5rem 1.5rem;
}
.page-error i { font-size: 48px; color: var(--gray-3); margin-bottom: 1rem; display: block; }
.page-error h2 { font-size: 20px; font-weight: 600; margin-bottom: 8px; }
.page-error p { font-size: 14px; color: var(--gray-5); margin-bottom: 1.5rem; }

/* ─── Trips container ─── */
.trips-container { overflow: hidden; width: 100%; }
.trips-inner { display: flex; width: 200%; transition: transform .45s cubic-bezier(.4,0,.2,1); }
.trip-panel { width: 50%; padding: 0 1.5rem; }

/* ─── Section blocks ─── */
.trip-hero { border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 12px; border: 1px solid var(--gray-2); }
.trip-hero img { width: 100%; height: 240px; object-fit: cover; }
.trip-hero-body { background: var(--white); padding: 1.1rem 1.25rem; }
.trip-title { font-size: 22px; font-weight: 700; letter-spacing: -.5px; margin-bottom: 8px; }
.trip-badges { display: flex; flex-wrap: wrap; gap: 6px; }

.section-block { background: var(--white); border: 1px solid var(--gray-2); border-radius: var(--radius-md); margin-bottom: 10px; overflow: hidden; }
.section-head { display: flex; align-items: center; gap: 10px; padding: .85rem 1.1rem; cursor: pointer; user-select: none; transition: background .1s; }
.section-head:hover { background: var(--gray-1); }
.section-head-icon { width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; }
.section-title { font-size: 14px; font-weight: 600; color: var(--black); }
.section-count { font-size: 12px; color: var(--gray-4); margin-left: 4px; }
.section-toggle { margin-left: auto; font-size: 16px; color: var(--gray-4); transition: transform .2s; }
.section-toggle.open { transform: rotate(180deg); }
.section-body { padding: 0 1.1rem 1rem; display: none; }
.section-body.open { display: block; }

/* ─── Icon bg colors ─── */
.ic-flight  { background: #E6F1FB; color: #185FA5; }
.ic-hotel   { background: #EEEDFE; color: #534AB7; }
.ic-act     { background: #EAF3DE; color: #3B6D11; }
.ic-food    { background: #FAEEDA; color: #854F0B; }
.ic-budget  { background: #E1F5EE; color: #0F6E56; }
.ic-iti     { background: #F1EFE8; color: #5F5E5A; }
.ic-tips    { background: #FAECE7; color: #993C1D; }
.ic-map     { background: #FBEAF0; color: #993556; }

/* ─── Badges ─── */
.badge { font-size: 11px; padding: 3px 10px; border-radius: 20px; font-weight: 500; }
.badge-blue   { background: #E6F1FB; color: #0C447C; }
.badge-green  { background: #EAF3DE; color: #27500A; }
.badge-amber  { background: #FAEEDA; color: #633806; }
.badge-purple { background: #EEEDFE; color: #3C3489; }
.badge-coral  { background: #FAECE7; color: #712B13; }
.badge-gray   { background: #F1EFE8; color: #5F5E5A; }

/* ─── Mini cards ─── */
.mini-card { background: var(--gray-1); border-radius: var(--radius-sm); padding: .8rem 1rem; margin-bottom: 8px; border: 1px solid var(--gray-2); }
.mini-card:last-child { margin-bottom: 0; }
.mc-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin-bottom: 4px; }
.mc-name { font-size: 13px; font-weight: 600; color: var(--black); }
.mc-price { font-size: 13px; font-weight: 600; color: var(--black); white-space: nowrap; }
.mc-sub { font-size: 12px; color: var(--gray-5); line-height: 1.5; }
.mc-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 7px; }
.mc-tag { font-size: 11px; padding: 2px 8px; border-radius: 12px; background: var(--white); border: 1px solid var(--gray-2); color: var(--gray-5); }
.mc-tip { font-size: 12px; color: var(--gray-4); font-style: italic; margin-top: 6px; }

/* ─── Budget bars ─── */
.budget-row { display: flex; align-items: center; gap: 10px; margin-bottom: 9px; }
.budget-label { font-size: 12px; color: var(--gray-5); width: 90px; flex-shrink: 0; }
.budget-track { flex: 1; background: var(--gray-2); border-radius: 4px; height: 7px; overflow: hidden; }
.budget-fill { height: 7px; border-radius: 4px; }
.budget-amount { font-size: 12px; font-weight: 600; color: var(--black); width: 65px; text-align: right; }
.budget-total { display: flex; justify-content: space-between; border-top: 1px solid var(--gray-2); padding-top: 10px; margin-top: 6px; }
.budget-total span { font-size: 14px; font-weight: 700; }
.budget-note { font-size: 12px; color: var(--gray-4); font-style: italic; margin-top: 8px; }

/* ─── Itinerary ─── */
.iti-day { margin-bottom: 1.1rem; }
.iti-day:last-child { margin-bottom: 0; }
.iti-day-label { font-size: 11px; font-weight: 700; color: var(--gray-4); text-transform: uppercase; letter-spacing: .5px; margin-bottom: 9px; }
.iti-items { border-left: 2px solid var(--gray-2); padding-left: 14px; display: flex; flex-direction: column; gap: 8px; }
.iti-item { display: flex; gap: 10px; font-size: 13px; }
.iti-time { color: var(--gray-4); font-size: 12px; min-width: 44px; padding-top: 1px; flex-shrink: 0; }
.iti-act { color: var(--black); }

/* ─── Tips grid ─── */
.tips-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; }
.tip-card { background: var(--gray-1); border: 1px solid var(--gray-2); border-radius: var(--radius-sm); padding: .85rem; }
.tip-card i { font-size: 20px; color: var(--gray-3); margin-bottom: 6px; display: block; }
.tip-label { font-size: 10px; font-weight: 700; color: var(--gray-4); text-transform: uppercase; letter-spacing: .4px; margin-bottom: 3px; }
.tip-val { font-size: 13px; font-weight: 500; color: var(--black); }

/* ─── Map ─── */
.map-wrap { background: var(--gray-1); border-radius: var(--radius-sm); overflow: hidden; }
.map-coords { font-size: 11px; color: var(--gray-4); text-align: center; padding: 6px; }

/* ─── Compare slider (header) ─── */
.compare-slider-inline { display: flex; align-items: center; gap: 8px; }
.cs-label { font-size: 12px; font-weight: 600; color: var(--black); max-width: 90px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cs-label--a { text-align: right; }
.cs-label--b { text-align: left; }
.compare-slider-inline input[type=range] { width: 120px; }

/* ─── Alt loading bar ─── */
.alt-loading-bar {
  position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
  background: var(--black); color: #fff; border-radius: 30px;
  padding: 10px 20px; display: flex; align-items: center; gap: 10px;
  font-size: 13px; z-index: 150; box-shadow: var(--shadow-md);
}

/* ─── Responsive ─── */
@media (max-width: 640px) {
  .hero-section { padding: 2rem 0 3rem; }
  .hero-sub { display: none; }
  .form-grid { grid-template-columns: 1fr 1fr; }
  .trip-panel { padding: 0 1rem; }
  .compare-slider-inline input[type=range] { width: 80px; }
  .cs-label { max-width: 60px; font-size: 11px; }
  .how-it-works { display: none; }
  .brand-tag { display: none; }
}
