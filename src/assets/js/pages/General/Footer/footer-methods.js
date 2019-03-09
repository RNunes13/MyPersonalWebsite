
import { footer as El } from './__cache-selectors';

export default {
  init() {
    this.setYearCoptyright();
  },

  setYearCoptyright() {
    const year = new Date().getFullYear();

    El.year.textContent = `${year}.`;
  },
};
