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
const Does = () => {

    // Try using this later
    const does =[
        {
            name: "Toffee",
            description: 'Toffee is a 2nd generation Mini-Alpine doe, with a friendly personality. She' +
                'has performed very well in the show ring and milk stand. ',
            awards: 'None',
            img: sapphirePhoto,
            pageLink: 'pages/SingleGoatInfo'
        },
        {
            name: "Milkshake",
            description: 'Milkshake is a 1st generation Mini-Alpine doe',
            awards: 'None',
            img: sapphirePhoto,
            pageLink: 'pages/SingleGoatInfo'
        },
        {
            name: "Sapphire",
            description: 'Sapphire is a 4th generation Mini-Alpine doe',
            awards: 'None',
            img: sapphirePhoto,
            pageLink: 'pages/SingleGoatInfo'
        },
    ]
    return (
        <div>
                <div className={'aboutPageHeader'}>
                    <h2>Sr. Does</h2>
                </div>
            <div >
                <DisplayGoats goats={does}/>
            </div>
            <div className={'aboutPageHeader'}>
                <h2>Jr. Does</h2>
                <p>We currently do not have any junior does at this point. </p>
            </div>
            <Footer/>
        </div>
    );
};

export default Does;
