/* Método Kegel 14 Dias — página de vendas */
(function () {
  /* ---------- Countdown regressivo (começa em 5:05) ---------- */
  const minEl = document.getElementById('cd-min');
  const secEl = document.getElementById('cd-sec');
  if (minEl && secEl) {
    let total = 5 * 60 + 5; // 05:05
    function tick() {
      const m = Math.floor(total / 60);
      const s = total % 60;
      minEl.textContent = String(m).padStart(2, '0');
      secEl.textContent = String(s).padStart(2, '0');
      if (total > 0) total--;
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- FAQ (accordion) ---------- */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.closest('.faq-item').classList.toggle('open');
    });
  });
})();
