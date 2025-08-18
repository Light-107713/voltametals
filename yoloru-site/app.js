const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Audio player for track list
const audio = document.getElementById('audio');
let currentButton = null;
document.querySelectorAll('.track .play').forEach((button) => {
  button.addEventListener('click', () => {
    const parent = button.closest('.track');
    const src = button.getAttribute('data-src');
    if (!src) {
      parent.classList.toggle('playing');
      return;
    }
    if (currentButton === button && !audio.paused) {
      audio.pause();
      parent.classList.remove('playing');
      return;
    }
    if (src && audio.src !== src) {
      audio.src = src;
    }
    document.querySelectorAll('.track').forEach((el) => el.classList.remove('playing'));
    parent.classList.add('playing');
    audio.play().catch(() => {});
    currentButton = button;
  });
});

audio?.addEventListener('ended', () => {
  document.querySelectorAll('.track').forEach((el) => el.classList.remove('playing'));
});

// Populate tour list from inline data
const tourList = document.getElementById('tourList');
const tourData = [
  { date: '2025-10-04', city: 'Berlin, DE', venue: 'Berghain', tickets: '#' },
  { date: '2025-11-12', city: 'Lagos, NG', venue: 'Eko Convention Center', tickets: '#' },
  { date: '2026-01-22', city: 'Toronto, CA', venue: 'History', tickets: '#' }
];

if (tourList) {
  const formatter = new Intl.DateTimeFormat(undefined, { month: 'short', day: '2-digit', year: 'numeric' });
  tourList.innerHTML = tourData.map((t) => {
    const when = formatter.format(new Date(t.date));
    return `
      <div class="tour-card">
        <div class="when">${when}</div>
        <div class="where">${t.city} · ${t.venue}</div>
        <a class="btn btn-ghost" href="${t.tickets}">Tickets</a>
      </div>
    `;
  }).join('');
}

// Counters animation
const counters = document.querySelectorAll('.about-stat .num[data-count]');
const animateCount = (el) => {
  const target = Number(el.getAttribute('data-count')) || 0;
  const start = 0;
  const durationMs = 1400;
  const startTime = performance.now();
  const loop = (now) => {
    const p = Math.min(1, (now - startTime) / durationMs);
    const eased = 1 - Math.pow(1 - p, 3);
    const value = Math.floor(start + (target - start) * eased);
    el.textContent = target >= 1000 ? value.toLocaleString() : String(value);
    if (p < 1) requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
};

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach((el) => io.observe(el));

// Footer year
document.getElementById('year').textContent = String(new Date().getFullYear());

// Demo submit handlers
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for reaching out. Connect a backend to receive messages.');
});
document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Subscribed! Connect your email platform to go live.');
});

