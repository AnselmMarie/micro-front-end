import React from 'react';
import { Route, Switch } from 'react-router-dom';

import WebComponentsRoute from '../web.components/WebComponents';
import '../child-react-two';


export default () => {
  return (
    <Switch>
      <Route exact path="/" component={WebComponentsRoute} />
      {/* <Route exact path="/web-components" component={WebComponentsRoute} /> */}
      <Route path="/child-react" render={() => <child-react-element></child-react-element>} />
      <Route path="/child-react-two" render={() => <child-react--element-two></child-react--element-two>} />
    </Switch>
  )
};
