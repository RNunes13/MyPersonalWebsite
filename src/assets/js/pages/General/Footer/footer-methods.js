
import { footer as El } from './__cache-selectors';

export default {
  init() {
    this.setYearCopyright();
  },

  setYearCopyright() {
    const year = new Date().getFullYear();

    El.year.textContent = `${year}.`;
  },
};
