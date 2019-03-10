import globalsInit from './globals-init';
import globalsOverlay from './globals-overlay';
import globalsFirebase from './globals-firebase';
import globalsBackTop from './globals-back-top';

export default {
  init() {
    globalsInit.init();
    globalsOverlay.init();
    globalsFirebase.init();
    globalsBackTop.init();
  },
};
