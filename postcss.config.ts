const path = require('path');
const { grid } = require('./src/postcss/imported-mixins/grid');
const { button } = require('./src/postcss/imported-mixins/button');
const { guttery, gutterx } = require('./src/postcss/functions/gutter');
const { lineClamp } = require('./src/postcss/imported-mixins/lineClamp');

module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['./src/postcss/customMedia.js'],
    },
    'postcss-preset-env': {
      autoprefixer: { grid: false },
      stage: 0,
      features: {
        clamp: false,
        'logical-properties-and-values': false,
        'media-query-ranges': {
          preserve: true,
        },
        'custom-properties': false,
      },
    },
    'postcss-mixins': {
      mixinsFiles: [
        path.join(__dirname, 'src/postcss/{mixins/,mixins/**}'),
        path.join(__dirname, 'src/css/{mixins/,mixins/**}'),
      ],
      mixins: {
        button,
        grid,
        lineClamp,
      },
    },
    'postcss-functions': {
      functions: {
        guttery,
        gutterx,
      },
    },
  },
};
