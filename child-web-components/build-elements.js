const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './DeclarativeCounter.js',
    './ImperativeCounter.js',
  ];

  await concat(files, '../shell/public/web-components.js');
})();
