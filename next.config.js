const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
module.exports = withPlugins(
  [
    [
      withImages,
      {
        /* plugin config here ... */
      },
    ],
  ],
  {
    /* global config here ... */
  }
);
