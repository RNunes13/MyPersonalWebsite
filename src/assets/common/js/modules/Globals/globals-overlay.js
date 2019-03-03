
export default {
  init() {
    setTimeout(() => {
      this.closeOverlay();
    }, 150);
  },

  closeOverlay() {
    Personal.overlay.addEventListener('click', (ev) => Personal.closeMenus(true));
  },
};
