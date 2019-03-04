
import CacheSelectors from './__cache-seletors';

const El = CacheSelectors.home.intro;

const Methods = {
  init() {
    console.log(`Initializing the home \u{1F388}`);

    El.downloadCv.addEventListener('click', Methods.downloadCv);
  },

  downloadCv(evt) {
    alert(`My CV is coming soon \u{1F609}`);
  },
};

export default {
  init: Methods.init,
};
