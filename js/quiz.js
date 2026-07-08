/* Método Kegel 14 Dias — lógica de navegação do quiz */
(function () {
  const steps = Array.from(document.querySelectorAll('.step'));
  const total = steps.length;
  const topbar = document.getElementById('topbar');
  const backBtn = document.getElementById('back');
  const fill = document.getElementById('progress-fill');

  let current = 0;
  const answers = {}; // guarda as respostas (útil p/ pixel/tracking depois)

  // Etapas que ocupam a tela inteira e escondem o topo (logo + progresso)
  const FULLSCREEN = { 7: 'theme-dark', 14: 'theme-navy' }; // índices 0-based (etapa8, etapa15)

  function show(i) {
    if (i < 0 || i >= total) return;
    current = i;

    steps.forEach((s, idx) => s.classList.toggle('active', idx === i));

    // tema/topbar
    document.body.classList.remove('theme-dark', 'theme-navy');
    if (FULLSCREEN[i]) {
      document.body.classList.add(FULLSCREEN[i]);
      topbar.style.display = 'none';
    } else {
      topbar.style.display = 'block';
      // barra de progresso proporcional à etapa
      fill.style.width = Math.round(((i + 1) / total) * 100) + '%';
    }

    // seta voltar some na 1ª etapa
    backBtn.style.visibility = i === 0 ? 'hidden' : 'visible';

    window.scrollTo({ top: 0, behavior: 'auto' });

    // gatilhos especiais
    if (i === 14) startLoading();      // etapa15 (loading/IA)
    if (i === 15) armVslCta();         // etapa16 (VSL)
  }

  function next() { show(current + 1); }
  function back() { show(current - 1); }

  // clique em qualquer opção / botão que avança
  document.addEventListener('click', function (e) {
    const adv = e.target.closest('[data-advance]');
    if (adv) {
      const step = adv.closest('.step');
      const key = step ? step.dataset.key : null;
      const val = adv.dataset.value || adv.textContent.trim();
      if (key) answers[key] = val;
      next();
    }
  });

  backBtn.addEventListener('click', back);

  /* ---------- Etapa 15: círculo de progresso 0→100 e auto-avanço ---------- */
  function startLoading() {
    const bar = document.getElementById('ring-bar');
    const pct = document.getElementById('ring-pct');
    if (!bar) return;
    const CIRC = 364; // 2π·58
    let p = 0;
    bar.style.strokeDashoffset = CIRC;
    pct.textContent = '0%';
    const timer = setInterval(function () {
      p += 2;
      if (p > 100) p = 100;
      bar.style.strokeDashoffset = CIRC - (CIRC * p) / 100;
      pct.textContent = p + '%';
      if (p >= 100) {
        clearInterval(timer);
        setTimeout(next, 500); // vai para a etapa16
      }
    }, 70);
  }

  /* ---------- Etapa 16: CTA aparece após alguns segundos ---------- */
  function armVslCta() {
    const cta = document.getElementById('vsl-cta');
    if (!cta || cta.dataset.armed) return;
    cta.dataset.armed = '1';
    setTimeout(function () { cta.classList.add('show'); }, 4000);
  }

  show(0);
})();
