
import { navbar as El } from './__cache-selectors';
import smoothScroll from 'smoothscroll';

export default {
  init() {
    El.link.forEach((item) => item.addEventListener('click', this.onClick));
  },

  onClick() {
    const target = document.querySelector(this.hash);

    if (target) {
      smoothScroll(target, 1500);
      Personal.closeMenus(true);
    }
  },
};
