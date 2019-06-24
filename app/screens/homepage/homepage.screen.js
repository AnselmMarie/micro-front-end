/* Node Modules */
import React, {Component} from "react";
/* Components */
import Header from '../../components/header';

const videoGames = [
    {
        id: '5345-324552345-5234532',
        name: 'Final Fantasy 7 Remake',
        price: '59.99',
        details: 'Awesome Man',
        thumbnail: '',
        screenshots: [

        ],
        review: '',
        purchaseReady: false,
        preOrder: true,
    },
    {
        id: '6547-324552345-8239532',
        name: 'Cyperpunk 2077',
        price: '59.99',
        details: 'Awesome Man',
        thumbnail: '',
        screenshots: [

        ],
        review: '',
        purchaseReady: false,
        preOrder: true,
    }

];

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

                <div className="container-fluid video-game-container">

                    {videoGames && videoGames.length !== 0 &&
                        videoGames.map((el) => this.renderItem(el))}

                    {!videoGames || videoGames && videoGames.length === 0 &&
                        <span>No Content Exist</span>}

                </div>

            </>
        )
    }

}


export default Homepage;
