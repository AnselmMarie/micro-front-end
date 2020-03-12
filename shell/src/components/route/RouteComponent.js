import React from 'react';
import { Route, Switch } from 'react-router-dom';

import WebComponentsRoute from '../web.components/WebComponents';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={WebComponentsRoute} />
    </Switch>
  )
};
