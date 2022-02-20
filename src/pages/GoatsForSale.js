import React from 'react';
import ImageSlider from '../components/ImageSlider';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import About from "./About";
import cappuccinoPhoto from '../images/cappuccinophoto.jpeg';
import sapphirePhoto from '../images/sapphirephoto.jpeg'
import strawberryHomePhoto from '../images/strawberryhomephoto.jpeg'
import Berries from "./Berries";
import Goats from "./Goats";
import Footer from "../components/footer";
import DisplayGoats from "../components/DisplayGoats";
const GoatsForSale = () => {

    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h2>For Sale</h2>
            </div>
            <div className={'noGoatsForSaleText'}>
                <p>We currently do not have any goats for sale at this point. We have kids for sale every spring
                and potentially a senior doe from time to time</p>
            </div>
            <Footer/>
        </div>
    );
};

export default GoatsForSale;
