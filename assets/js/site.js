const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const dialog = document.querySelector('#coming-soon');
document.querySelectorAll('[data-coming-soon]').forEach((button) => {
  button.addEventListener('click', () => dialog?.showModal());
});
document.querySelector('[data-close-dialog]')?.addEventListener('click', () => dialog?.close());


