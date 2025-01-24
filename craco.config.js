/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@libs': path.resolve(__dirname, 'src/libs/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@providers': path.resolve(__dirname, 'src/providers/'),
      '@translation': path.resolve(__dirname, 'src/translation/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
};
