const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/vendors-polyfill.bundle.js',
    './dist/vendors-main.bundle.js',
    './dist/polyfill.bundle.js',
    './dist/main.bundle.js',
  ];

  await concat(files, 'child-react-element.js');
})();
