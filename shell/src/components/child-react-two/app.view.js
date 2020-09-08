/* Node Module */
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import React from 'react';
import { HashRouter } from 'react-router-dom';
// import root from 'react-shadow';

import RouteComponent from './route.view';

/**
 * @function App View
 * @desc render the app view
 */
export default () => {
  return (
    <HashRouter>
      <RouteComponent />
    </HashRouter>
  );
}
