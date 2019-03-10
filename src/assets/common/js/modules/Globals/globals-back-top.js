
import smoothScroll from 'smoothscroll';

export default {
  init() {
    setTimeout(() => {
      this.showButton();
      this.onClick();
    }, 150);
  },

  showButton() {
    window.addEventListener('scroll', this.onScroll);
  },

  onScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight - 55;

    if (scrollY > windowHeight) Personal.backTop.classList.add('is--active');
    else Personal.backTop.classList.remove('is--active');
  },

  onClick() {
    Personal.backTop.addEventListener('click', (evt) => {
      evt.preventDefault();

      smoothScroll(0, 1000);
    });
  },
};
