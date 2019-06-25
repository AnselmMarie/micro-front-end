/* Node Modules */
import React, {Component} from "react";
/* Components */
import Header from '../../components/header';
import ShopItems from './shop.items.component';
/* JSON */
import videoGames from '../../api/video.game/video.games.json';

/**
 * @class Homepage
 * @desc contains that renders the homepage
 * @author Anselm Marie
 * @return {JSX.element}
 */
class Homepage extends Component {

    /**
     * @function render
     * @desc contains that renders the homepage
     * @author Anselm Marie
     * @memberBy Homepage
     * @return {JSX.element}
     */
    render() {

        return (
            <>

                <Header />

                {videoGames && videoGames.length !== 0 &&
                    <ShopItems data={videoGames} columns={3} />}

                {!videoGames || videoGames && videoGames.length === 0 &&
                    <div data-testid="no-content" className="container no-content">
                        <span>No Content Exist</span>
                    </div>}

            </>
        )
    }

}


export default Homepage;
