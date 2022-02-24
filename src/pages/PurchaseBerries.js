import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import sapphirePhoto from "../images/sapphirephoto.jpeg";
import strawberryHomePhoto from "../images/strawberryhomephoto.jpeg";
import cappuccinoPhoto from "../images/cappuccinophoto.jpeg";
import Footer from "../components/footer";
import Home from "./Home";
import About from "./About";
import Goats from "./Goats";
const PurchaseBerries = () =>{
    console.log("On the About Berries Page");
    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h1 className={'westonFont'}>Purchase Our Berries</h1>
            </div>
            <div className={'aboutPageHeader'}>
                <p> Our berries are for sale at our farm or the farmer's markets listed below:  </p>

                <p className={'farmersMarketText'}> Sequim Farmer's Market </p>

                <p className={'farmersMarketText'}> Port Angeles Farmer's Market </p>

            </div>
            <div className='productSelection'>
                <Link className= 'productCard' to='/pages/Berries.js'>
                    <img src={strawberryHomePhoto} width={200} height={200}></img>
                    <p className={'linkText'}>About Our Berries</p></Link>
            </div>
            <Footer/>
        </div>
    );
}
export default PurchaseBerries;
