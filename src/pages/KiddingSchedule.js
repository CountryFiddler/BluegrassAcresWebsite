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
const KiddingSchedule = () => {

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
            name: "Sapphire",
            description: 'Sapphire is a 4th generation Mini-Alpine doe',
            awards: 'None',
            img: sapphirePhoto,
            pageLink: 'pages/SingleGoatInfo'
        },
    ]

    const bucks =[
        {
            name: "Shasta",
            img:cappuccinoPhoto,
            pageLink: 'pages/SingleGoatInfo'
        },
        {
            name: "Shasta",
            img:cappuccinoPhoto,
            pageLink: 'pages/SingleGoatInfo'
        },
    ]
    // Try using this later
    const pairings =[
        {
            doe: does[1],
            buck: bucks[0],
            kiddingDate: " April 9th, 2022",
        },
        {
            doe: does[0],
            buck: bucks[0],
            kiddingDate: " April 17th, 2022",
        },
    ]
    return (
        console.log(pairings[0]),
        <div>
            <div className={'aboutPageHeader'}>
                <h2 className={'westonFont'}>Kidding Schedule</h2>
            </div>
            <div >
                <div >
                    {pairings.map((pairing,i=0) => (
                        console.log(pairing.doe.name),
                            <div className='displayKiddingSchedule'>
                            <div className={'goatDisplay'} >
                                <p className={'westonFont'}>{pairing.doe.name}</p>
                                <img src={pairing.doe.img} width={200} height={200}></img>
                            </div>
                        <div className={'goatDisplay'}>
                        <p className={'westonFont'}>{pairing.buck.name}</p>
                        <img src={pairing.buck.img} width={200} height={200}></img>
                        </div>
                                <div className={'goatDisplay'}>
                                    <p className={'kiddingDateText'}>{pairing.doe.name} is due to kid
                                        {pairing.kiddingDate}</p>
                                </div>
                                <div className={'goatDisplay'}>
                                    <p className={'aboutPageHeader'}>Reserve your new kid today!</p>
                                </div>
                            </div>
                    ))}

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default KiddingSchedule;
