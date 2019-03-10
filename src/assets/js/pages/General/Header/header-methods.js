
export default {
  init() {
    this.onClickMenu();
    this.fillHeader();
    this.onScroll();
    this.onWindowResize();
  },

  onClickMenu() {
    Personal.menuBtn.addEventListener('click', (evt) => {
      evt.target.classList.toggle('is--open');
      Personal.navbar.classList.toggle('is--open');
      Personal.overlay.classList.toggle('is--active');
      Personal.body.classList.toggle('has--no-scroll');
    });
  },

  fillHeader() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // windowHeight * (1 - 0.9) -> Calcula o valor de 10% da altura da window
    if (windowHeight * (1 - 0.9) < scrollY) Personal.header.classList.add('is--fill');
    else Personal.header.classList.remove('is--fill');
  },

  onScroll() {
    window.addEventListener('scroll', this.fillHeader);
  },

  onWindowResize() {
    window.addEventListener('resize', (evt) => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 768) Personal.closeMenus(true);
    });
  },
};
