/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
    },
  },
};
