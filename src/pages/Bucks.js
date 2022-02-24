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
const Bucks = () => {

    // Try using this later
    const srBucks =[
        {
            name: "Shasta",
            description: 'Shasta is a 2nd generation Mini-Alpine buck, with a friendly personality. He' +
                'has performed very well in the show ring. ',
            awards: 'None',
            img: cappuccinoPhoto,
            pageLink: 'pages/SingleGoatInfo'
        }
    ]
    const jrBucks =[
        {
            name: "Cappuccino",
            description: 'Cappuccino is a purebred Nigerian Dwarf buck, with a friendly personality.',
            awards: 'None',
            img: cappuccinoPhoto,
            pageLink: 'pages/SingleGoatInfo'
        }
    ]
    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h2 className={'westonFont'}>Sr. Bucks</h2>
            </div>
            <div className={'displayGoatsContainer'}>
                <DisplayGoats goats={srBucks}/>
            </div>
            <div className={'aboutPageHeader'}>
                <h2 className={'westonFont'}>Jr. Bucks</h2>
            </div>
            <div className={'displayGoatsContainer'}>
                <DisplayGoats goats={jrBucks}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Bucks;
