/* Node Modules */
import React from "react";
/* Components */
import Cart from '../cart';

/**
 * @class Header Component
 * @desc contains that renders the header
 * @author Anselm Marie
 * @return {JSX.element}
 */
export default () => {
    return(
        <header>
            <h1>Video Games</h1>
            <Cart />
        </header>
    )
}
