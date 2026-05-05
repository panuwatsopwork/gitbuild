const toggleButton = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (toggleButton && siteNav) {
  toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });
}
