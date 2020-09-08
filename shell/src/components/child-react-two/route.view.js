/* Node Module */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* Route */
import DefaultRoute from './default.route';
import TestDataTable from './testing.route';

/**
 * @function Route View
 * @desc renders the route jsx elements
 */
export default () => {
  return (
    <Switch>
      <Route exact path="/child-react-two" component={DefaultRoute} />
      <Route exact path="/child-react-two/testing" component={TestDataTable} />
    </Switch>
  )
}
