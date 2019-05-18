
import iziToast from 'izitoast';

export default {
  init() {
    this.initToastify();
  },

  initToastify() {
    iziToast.settings({
      layout: 2,
      timeout: 5000,
      titleSize: '16',
      messageSize: '16',
      resetOnHover: true,
      transitionIn: 'flipInX',
      progressBarColor: '#000',
      position: 'bottomCenter',
      transitionOut: 'flipOutX',
    });

    Personal.toastify = iziToast;
  },
};
