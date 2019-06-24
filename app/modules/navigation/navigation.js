/* Node Modules */
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
/* Screens */
import Homepage from '../../screens/homepage';
// import Portfolio from '../../screens/order';
import NoMatch from '../../screens/no.match';

/**
 * @function Navigation
 * @desc setup of the navigation
 * @author Anselm Marie
 */
export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => <Homepage/>}/>
            {/*<Route exact path="/portfolio/:company/:project" component={Portfolio}/>*/}
            <Route exact render={() => <NoMatch/>} />
        </Switch>
    </BrowserRouter>
);