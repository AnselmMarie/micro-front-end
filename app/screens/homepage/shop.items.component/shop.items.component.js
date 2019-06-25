/* Node Modules */
import React, {PureComponent} from 'react';

/**
 * @class ShopItems
 * @desc contains that renders the shop items
 * @author Anselm Marie
 * @return {JSX.element}
 */
class ShopItems extends PureComponent {

    /**
     * @variable total
     * @desc the total amount of the data given
     * @author Anselm Marie
     * @return {number}
     */
    total = null;

    /**
     * @variable currentTotal
     * @desc the current number of rows rendered
     * @author Anselm Marie
     * @return {number}
     */
    currentTotal = null;

    /**
     * @variable nextRow
     * @desc when the next row will be created
     * @author Anselm Marie
     * @return {number}
     */
    nextRow = null;

    /**
     * @variable resetData
     * @desc reset the variable data
     * @author Anselm Marie
     * @return {number}
     */
    resetData = () => {
        this.total = this.props.data.length;
        this.currentTotal = 0;
        this.nextRow = this.props.columns;
    };


    /**
     * @function renderItem
     * @desc renders each individual video game
     * @author Anselm Marie
     * @memberBy ShopItems
     * @param {object} el - single video game object
     * @return {JSX.element}
     */
    renderItem = (el, index) => {
        // ii = ii + this.props.columns;
        console.log('nextRow', this.nextRow);

        if (index === 0) {
            resetData();
        }


        return (
            <div className="col shop-item" key={el.id}>
                <div>Use Image - {el.thumbnail}</div>
                <div>{el.name}</div>
                <div>{el.price}</div>
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
