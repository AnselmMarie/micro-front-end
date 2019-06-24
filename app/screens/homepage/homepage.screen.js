/* Node Modules */
import React, {Component} from "react";
/* Components */
import Header from '../../components/header';
import videoGames from '../../api/video.game/video.games.json';

/**
 * @class Homepage
 * @desc contains that renders the homepage
 * @author Anselm Marie
 * @return {JSX.element}
 */
class Homepage extends Component {

    /**
     * @class renderItem
     * @desc renders each individual video game
     * @author Anselm Marie
     * @memberBy Homepage
     * @param {object} el - single video game object
     * @return {JSX.element}
     */
    renderItem = (el) => {
        return (
            <div key={el.id}>
                <span>{el.name}</span>
            </div>
        );
    };

    /**
     * @class Homepage
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
                    <div data-testid="video-games-loaded" className="container-fluid video-game-container">
                        {videoGames.map((el) => this.renderItem(el))}
                    </div>}

                {!videoGames || videoGames && videoGames.length === 0 &&
                    <div data-testid="no-content" className="container-fluid no-content">
                        <span>No Content Exist</span>
                    </div>}

            </>
        )
    }

}


export default Homepage;
