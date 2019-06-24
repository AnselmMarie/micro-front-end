/* Node Modules */
import React, {Component} from "react";
/* Components */
import Header from '../../components/header';

/**
 * @class Homepage
 * @desc contains that renders the homepage
 * @author Anselm Marie
 * @return {JSX.element}
 */
class Homepage extends Component {

    render() {
        return (
            <>
                <Header />
                <h1 data-testid="Homepage">Hello World</h1>
            </>
        )
    }

}


export default Homepage;
