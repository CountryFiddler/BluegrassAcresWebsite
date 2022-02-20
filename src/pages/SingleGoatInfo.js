import React from 'react';
import ImageSlider from '../components/ImageSlider';
import {BrowserRouter as Router, Link, Route, Routes, useLocation} from "react-router-dom";
import About from "./About";
import cappuccinoPhoto from '../images/cappuccinophoto.jpeg';
import sapphirePhoto from '../images/sapphirephoto.jpeg'
import strawberryHomePhoto from '../images/strawberryhomephoto.jpeg'
import Berries from "./Berries";
import Goats from "./Goats";
import Footer from "../components/footer";

function SingleGoatInfo () {
    const location = useLocation();
    const goat = location.state.goat;
    console.log(location.state);
    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h1>{goat.name}</h1>
            </div>
            <div className='displayGoatImages'>
            <img className={'goatImageDisplay'} src={goat.img} width={200} height={200}></img>
            </div>
            <div className='displayDescriptionAwardsContainer'>
                <h3 className={'descriptionAwardsContainerDisplay'}>Description</h3>
                <h3 className={'descriptionAwardsContainerDisplay'}>Awards</h3>
            </div>
            <div className='displayDescriptionAwards'>
                    <p className={'descriptionAwardsDisplay'}>{goat.description}</p>
                <p className={'descriptionAwardsDisplay'}>{goat.awards}</p>
            </div>
            <p className={'goatDisplay'}>If interested in a kid from {goat.name}, please check our for sale page</p>
            <Link className= 'productCard' to='pages/Goats.js'>
                <p className={'linkText'}>For Sale</p>
            </Link>
            <Footer/>
        </div>
    );
};

export default SingleGoatInfo;
