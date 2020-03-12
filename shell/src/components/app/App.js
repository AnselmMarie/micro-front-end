import React from 'react';
import RouteComponent from '../route/RouteComponent';

import { HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <RouteComponent />
    </HashRouter>
  );
};

export default App;
