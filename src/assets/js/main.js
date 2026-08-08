// FAQ accordion — one item open at a time
document.querySelectorAll('.accordion-button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.accordion-item').forEach((el) => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  // Escape closes it, and focus goes back to the button rather than nowhere
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
      navToggle.focus();
    }
  });
}

// Kickoff-call form: record the conversion before the browser navigates to
// Formspree. beacon transport is what makes the event survive that unload.
// No field values are sent — only the fact that a submission happened.
// No-ops entirely until a GA4 Measurement ID is set in _data/site.js.
document.querySelectorAll('form[action*="formspree"]').forEach((form) => {
  form.addEventListener('submit', () => {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'generate_lead', {
      form_name: 'kickoff_call',
      transport_type: 'beacon',
    });
  });
});
