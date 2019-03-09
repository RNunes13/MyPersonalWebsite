
import CacheSelectors from './__cache-seletors';

const El = CacheSelectors.home.about;

const Methods = {
  init() {
    Methods.onScroll();
    Methods.animateSkillBars();
  },

  animateSkillBars() {
    window.addEventListener('scroll', Methods.onScroll);
  },

  onScroll(evt) {
    const skills = El.skills.getBoundingClientRect().top;
    const windowHeight = window.innerHeight * (1 - 0.1);
    const progressBars = El.self.querySelectorAll('.rn-progress-bar');

    if (skills < windowHeight) {
      progressBars.forEach((item) => item.classList.add('animate'));

      window.removeEventListener('scroll', Methods.onScroll);
    }
  },
};

export default {
  init: Methods.init,
};
