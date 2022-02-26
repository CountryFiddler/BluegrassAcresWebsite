import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import sapphirePhoto from "../images/sapphirephoto.jpeg";
import strawberryHomePhoto from "../images/strawberryhomephoto.jpeg";
import cappuccinoPhoto from "../images/cappuccinophoto.jpeg";
import Footer from "../components/footer";
import Home from "./Home";
import About from "./About";
import Goats from "./Goats";
const Berries = () =>{
    console.log("On the About Berries Page");
    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h1 className={'westonFont'}>About Our Berries</h1>
            </div>
            <div className={'aboutPageText'}>
                <p> Summer time is full of good weather, fun times, and here at Bluegrass Acres, many pounds of strawberries and blueberries.  </p>

                <p> Our main variety of strawberries is the Puget Crimson, which is a high yielding strawberry plant that produces a sweet berry that is perfect for any occasion. It is suited for processing or fresh use, which makes this berry perfect for anybody making preserves or who just wants some to eat fresh. </p>

                <p> For blueberries, we have a mixed variety, which allows us to use them however we please. Our blueberries have a rich, sweet flavor that is perfect for pies, jams, or fresh eating. </p>

                <p> Our strawberry season starts the beginning of June and ends beginning of July. Our blueberry season runs from middle of July to middle of August.  </p>
            </div>
            <div className='productSelection'>
                <Link className= 'productCard' to='/pages/PurchaseBerries.js'>
                    <img className={'photos'} src={strawberryHomePhoto} width={200} height={200}></img>
                    <p className={'linkText'}>Purchase Berries</p></Link>
            </div>
            <Footer/>
        </div>
    );
}
export default Berries;
