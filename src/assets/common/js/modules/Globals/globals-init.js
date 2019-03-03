export default {
  init() {
    this.fontsLoad();
    this.setGlobals();
    this.setLazy();
    this.closeMenus();
  },

  fontsLoad() {
    const Lato300 = new FontFaceObserver('Lato', {weight: 300});
    const Lato400 = new FontFaceObserver('Lato', {weight: 400});
    const Lato700 = new FontFaceObserver('Lato', {weight: 700});
    const Lato900 = new FontFaceObserver('Lato', {weight: 900});

    Promise.all([
      Lato300.load(),
      Lato400.load(),
      Lato700.load(),
      Lato900.load(),
    ]);
  },

  setGlobals() {
    window.Personal = window.Personal || {};
    Personal.pathname = window.location.pathname;

    // Cache Elements
    Personal.html = document.querySelector('html');
    Personal.body = document.querySelector('body');
    Personal.header = document.querySelector('.js--header');
    Personal.navbar = document.querySelector('.js--navbar');
    Personal.footer = document.querySelector('.js--footer');
    Personal.overlay = document.querySelector('.js--overlay');

    // External Plugins
    Personal.isMobile = isMobile.any;
  },

  setLazy() {
    Personal.lazyload = new LazyLoad({
      data_src: 'src',
      data_srcset: 'srcset',
      class_loading: 'is--loading',
      class_loaded: 'is--loaded',
      class_error: 'has--lazy-error',
      elements_selector: '.js--lazy',
      threshold: 500,
      callback_set(_this) {
        document.querySelector(_this).clasList.remove('has--lazy');
      },
      callback_load(_this) {
        document.querySelector(_this).clasList.remove('has--placeloader');
      },
    });
  },

  closeMenus() {
    Personal.closeMenus = (removeOverlay = false) => {
      if (removeOverlay) {
        Personal.overlay.classList.remove('is--active');
        Personal.navbar.classList.remove('is--active');
        Personal.body.classList.remove('has--no-scroll');
      }
    };
  },
};
