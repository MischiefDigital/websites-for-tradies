// FAQ accordion — one item open at a time
document.querySelectorAll('.accordion-button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.accordion-item').forEach((el) => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

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
