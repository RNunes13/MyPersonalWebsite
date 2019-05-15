
import { navbar as El } from './__cache-selectors';
import smoothScroll from 'smoothscroll';

export default {
  init() {
    El.link.forEach((item) => item.addEventListener('click', this.onClick));
    window.addEventListener('scroll', this.onScroll);
  },

  onClick(evt) {
    evt.preventDefault();
    const target = document.querySelector(this.hash);

    if (target) {
      smoothScroll(target, 1500);
      Personal.closeMenus(true);
    }
  },

  onScroll() {
    El.link.forEach((item) => {
      const element = document.querySelector(item.getAttribute('href')).offsetTop - Personal.navbarHeight;
      const elementActive = El.items.querySelector('.is--active');

      if (window.scrollY >= element) {
        elementActive && elementActive.classList.remove('is--active');
        item.parentElement.classList.add('is--active');
      }
    });
  },
};
