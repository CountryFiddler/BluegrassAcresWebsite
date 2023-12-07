import React from 'react';
import sapphirePhoto from '../images/mainsapphirephoto.jpeg'
import toffeePhoto from '../images/toffeephoto.jpeg'
import milkshakePhoto from '../images/milkshakephoto.jpeg'
import Footer from "../components/footer";
import DisplayGoats from "../components/DisplayGoats";
const Does = () => {


    const does =[
        {
            name: "Toffee",
            description: 'Toffee is a 2nd generation Mini-Alpine doe, with a friendly personality. She' +
                'will be a first freshener in Spring 2022',
            awards: 'None',
            img: toffeePhoto,
            pageLink: 'pages/SingleGoatInfo'
        },
        {
            name: "Milkshake",
            description: 'Milkshake is a 1st generation Mini-Alpine doe with a friendly personality. She will be a first freshener in Spring 2023',
            awards: 'None',
            img: milkshakePhoto,
            pageLink: 'pages/SingleGoatInfo'
        },
        {
            name: "Sapphire",
            description: 'Sapphire is a 4th generation Mini-Alpine doe. She has a friendly personality and loves to be pet.' +
            'She has done very well in the show ring and milk stand',
            awards: '2020 Spring MDGA V-Show Grand Champion AOM Jr. Doe',
            img: sapphirePhoto,
            pageLink: 'pages/SingleGoatInfo'
        },
    ]
    return (
        <div>
                <div className={'aboutPageHeader'}>
                    <h2 className={'westonFont'
                    }>Sr. Does</h2>
                </div>
            <div >
                <DisplayGoats goats={does}/>
            </div>
            <div className={'aboutPageHeader'}>
                <h2 className={'westonFont'}>Jr. Does</h2>
                <p>We currently do not have any junior does at this point. </p>
            </div>
            <div className={'filler'}/>
            <Footer/>
        </div>
    );
};

export default Does;
