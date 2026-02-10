const menu = document.querySelector('[data-menu]');
const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const mobMenuLink = document.querySelectorAll('[data-mob-nav]');

const openMenu = () => {
  menu.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
};

const closeMenu = () => {
  menu.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
};

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

mobMenuLink.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

document.addEventListener('keydown', esc => {
  if (esc.key === 'Escape' && !menu.classList.contains('is-hidden')) {
    closeMenu();
  }
});
