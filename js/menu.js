(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open-menu'),
    closeMenuBtn: document.querySelector('.mob-menu-close'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.menu.classList.toggle('no-scroll');
  }
})();
