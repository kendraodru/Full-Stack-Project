import React from 'react'
import Tile from './tile';
import PicSet from './photoset';
import MidSplash from './mid_splash';
import UpperMid from './upper_mid';
import BottomMidSplash from './bottom_mid_splash';
import Banner from './banner';

import { connect } from 'react-redux'
import { fetchProducts } from '../../actions/product_actions';

class Splash extends React.Component{

        constructor(props){
            super(props);
        }

        componentDidMount(){
            this.props.fetchProducts();
        }


        render(){
            return(
                <div className='splash-wrapper'>
                    <div className="hamburger"></div>
                    <div className="root-pic">
                        <div className="main-content">
                            <div className="main-pic-text">
                                Good Skin
                                <br/>
                                Starts Here
                            </div>   
                            {/* <div className="main-pic-para">
                                Intelligent multitasking hydration powered by antioxidant-rich 
                                adaptogens, hyaluronic acid, and activated neuropeptides. It's ultra-fine 
                                and ready for your top shelf.
                            </div> */}
                            {/* <div className='shop-now'>
                                <button className='shop-now-btn'>
                                    <a className='shop-now-href 'href="/">SHOP NOW</a>
                                </button>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="TESTER">

                    </div> */}
                    <div className="lower-splash-content-outter-div">
                        <div className='lower-splash-content'>
                            <UpperMid />
                            <MidSplash />
                            <Tile />
                            <BottomMidSplash />
                            <Banner />
                            <PicSet />
                        </div>
                    </div>
                </div>
            )
        }
}

// export default Splash;


const MapStateToProps = (state) => {
    // debugger
    return {
        products: state.entities.cartProducts,
    }
}


const MapDispatchToProps = dispatch => ({
    fetchProducts: () => (dispatch(fetchProducts()))
});


export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Splash)
