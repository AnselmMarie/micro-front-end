/* Node Module */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import RouteComponent from '../../components/route.component';

/**
 * @function App View
 * @desc render the app view
 */
export default (): JSX.Element => {
  return (
    <HashRouter>
      <RouteComponent />
    </HashRouter>
  );
}
