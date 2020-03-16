/* Node Module */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* Route */
import DefaultRoute from '../../routes/default.route';

/**
 * @function Route View
 * @desc renders the route jsx elements
 */
export default () => {
  return (
    <Switch>
      <Route exact path="/" component={DefaultRoute} />
    </Switch>
  )
}
