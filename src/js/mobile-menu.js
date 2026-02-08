const menu = document.querySelector('[data-menu]');
const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const mobMenuLink = document.querySelectorAll('[data-mob-nav]');

const toggleMenu = () => {
  menu.classList.toggle('visually-hidden');
};

const openMenu = () => {
  toggleMenu();
  document.body.classList.add('no-scroll');
};

const closeMenu = () => {
  toggleMenu();
  document.body.classList.remove('no-scroll');
};

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', closeMenu);

mobMenuLink.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

document.addEventListener('keydown', esc => {
  if (esc.key === 'Escape' && !menu.classList.contains('visually-hidden')) {
    closeMenu();
  }
});
