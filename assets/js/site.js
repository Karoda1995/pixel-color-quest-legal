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



const savedLanguage=localStorage.getItem('magicfox-language');
const browserLanguage=navigator.language&&navigator.language.toLowerCase().startsWith('ru')?'ru':'en';
function setLanguage(language){const current=language==='ru'?'ru':'en';document.documentElement.lang=current;localStorage.setItem('magicfox-language',current);document.querySelectorAll('[data-en][data-ru]').forEach(node=>{node.textContent=node.dataset[current]});document.querySelectorAll('[data-lang]').forEach(button=>{const active=button.dataset.lang===current;button.classList.toggle('is-active',active);button.setAttribute('aria-pressed',String(active))});document.querySelectorAll('[data-lang-block]').forEach(node=>{node.hidden=node.dataset.langBlock!==current})}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
setLanguage(savedLanguage||browserLanguage);
