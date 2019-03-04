/* eslint-disable indent */
/* eslint-disable key-spacing */
/* eslint-disable no-multi-spaces */
import Taskerify from 'taskerify';

Taskerify.config.sourcemaps    = false;
Taskerify.config.srcPath       = './src/assets'; // Src Path
Taskerify.config.distPath      = './dist/assets'; // Dist Path
Taskerify.config.srcViewsPath  = './src'; // Views Src Path
Taskerify.config.distViewsPath = './dist'; // Compiled Views Dist Path (HTML)

// eslint-disable-next-line no-unused-vars
const NODE_MODULES  = './node_modules';
const SRC           = Taskerify.config.srcPath;
const DIST          = Taskerify.config.distPath;

const storeName   = 'personal';
const commomFiles = ['globals'];
const otherFiles  = ['home', 'general'];

// eslint-disable-next-line new-cap
Taskerify((mix) => {
  // PugJS Template / Params -> srcFolder, distFolder, options
  mix.pug('src/views', 'dist/');

  // Javascript Linter
  mix.eslint();

  // SVG to Iconfonts
  mix.iconfont({
    /** Plugin options - Default Values */
    normalize           : true,
    fontHeight          : 1001,
    centerHorizontally  : true,

    /** Fonts / CSS options */
    iconsPath       : `${SRC}/common/iconfont/`,
    sassPath        : `${SRC}/common/scss/settings/`,
    fontPath        : '/assets/common/iconfont/',
    outputFontPath  : `${DIST}/common/iconfont/`,
    className       : 'iconfont',
    iconFontName    : `iconfont-${storeName}`,
    template        : './node_modules/taskerify/storage/iconfont-template.scss',
    sassFileName    : `_iconfont-${storeName}`,
    customExtension : '.css',
  });

  // Image Minifier
  mix.imagemin(`${SRC}/images`, `${DIST}/images`);

  // Common Files
  commomFiles.map((file) => {
    mix
      .browserify(
        `${SRC}/common/js/${storeName}-common-${file}.js`,
        `${DIST}/common/js`
      )
      .sass(
        `${SRC}/common/scss/${storeName}-common-${file}.scss`,
        `${DIST}/common/css`
      );
  });

  // Other Files
  otherFiles.map((file) => {
    mix
      .browserify(
        `${SRC}/js/${storeName}-${file}.js`,
        `${DIST}/js`
      )
      .sass(
        `${SRC}/scss/${storeName}-${file}.scss`,
        `${DIST}/css`
      );
  });
});
