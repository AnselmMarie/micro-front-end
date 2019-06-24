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
        <header className="main-header container-fluid">
            <div className="row">
                <div className="col-sm">
                    <h1>Video Games</h1>
                </div>
                <div className="col-sm-2">
                    <Cart />
                </div>
            </div>
        </header>
    )
}
