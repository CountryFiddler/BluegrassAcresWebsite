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
const OurHerd = () => {

    // Try using this later
    const images =[
        {
            name: sapphirePhoto,
            link: 'pages/About.js',
        },
        {
            name: strawberryHomePhoto,
            link: 'pages/Berries.js',
        },
        {
            name: cappuccinoPhoto,
            link: 'pages/Goats.js',
        },
    ]
    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h1 className={'westonFont'}>Our Herd</h1>
            </div>
            <div className='productSelection'>
                <Link className= 'productCard' to='/pages/Does.js'>
                    <img className={'photos'} src={sapphirePhoto} width={200} height={200}></img>
                    <p className={'linkText'}>Does</p></Link>
                <Link className= 'productCard' to='/pages/Bucks.js'>
                    <img className={'photos'} src={cappuccinoPhoto} width={200} height={200}></img>
                    <p className={'linkText'}>Bucks</p>
                </Link>
                <Link className= 'productCard' to='/pages/OurHerd.js/GoatsForSale.js'>
                    <img className={'photos'} src={cappuccinoPhoto} width={200} height={200}></img>
                    <p className={'linkText'}>For Sale</p>
                </Link>
            </div>
            <Footer/>
        </div>
    );
};

export default OurHerd;
