// === NAV SCROLL EFFECT ===
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });


// === SCROLL REVEAL ===
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings in the same parent
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// === STAT COUNTER ANIMATION ===
function formatStat(value, format) {
  if (format === 'M') {
    const m = value / 1000000;
    return m.toFixed(m >= 1 ? 0 : 1) + 'M';
  }
  if (format === 'K')  return Math.round(value / 1000) + 'K';
  if (format === 'K+') return Math.round(value / 1000) + 'K+';
  return value.toLocaleString('sv-SE');
}

function animateStat(el) {
  const target = parseInt(el.dataset.target, 10);
  const format = el.dataset.format;
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatStat(Math.round(eased * target), format);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

let statsTriggered = false;
const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !statsTriggered) {
    statsTriggered = true;
    document.querySelectorAll('.stat-num').forEach((el, i) => {
      setTimeout(() => animateStat(el), i * 150);
    });
  }
}, { threshold: 0.5 });

const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);
