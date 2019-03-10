import globalsInit from './globals-init';
import globalsOverlay from './globals-overlay';
import globalsFirebase from './globals-firebase';

export default {
  init() {
    globalsInit.init();
    globalsOverlay.init();
    globalsFirebase.init();
  },
};
