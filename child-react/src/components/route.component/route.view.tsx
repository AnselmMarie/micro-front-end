/* Node Module */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* Route */
import DefaultRoute from '../../routes/default.route';
import TestDataTable from '../../routes/test-data-table';

/**
 * @function Route View
 * @desc renders the route jsx elements
 */
export default () => {
  return (
    <Switch>
      <Route exact path="/child-react" component={DefaultRoute} />
      <Route exact path="/child-react/data-table" component={TestDataTable} />
    </Switch>
  )
}
