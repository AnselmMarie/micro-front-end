/* Node Modules */
import React, {PureComponent} from 'react';
import { Link } from "react-router-dom";

/**
 * @class ShopItems
 * @desc contains that renders the shop items
 * @author Anselm Marie
 * @return {JSX.element}
 */
class ShopItems extends PureComponent {

    /**
     * @function renderItem
     * @desc renders each individual video game
     * @author Anselm Marie
     * @memberBy ShopItems
     * @param {object} el - single video game object
     * @return {JSX.element}
     */
    renderItem = (el, index) => {
        const link = `/product/${el.id}`;
        return (
            <div className="col-sm-4 shop-item" key={el.id}>
                <Link to={link}>Use Image - {el.thumbnail}</Link>
                <Link to={link}>{el.name}</Link>
                <div>{el.price}</div>
                <div>Add to Cart</div>
            </div>
        );
    };


    /**
     * @function render
     * @desc contains that renders the shop item
     * @author Anselm Marie
     * @memberBy ShopItems
     * @return {JSX.element}
     */
    render(props) {
        return(

            <>
                <div data-testid="video-games-loaded" className="container video-game-container">
                    <div className="row">
                        {this.props.data.map((el, index) => this.renderItem(el, index))}
                    </div>
                </div>
            </>

        )
    }

}

export default ShopItems;
