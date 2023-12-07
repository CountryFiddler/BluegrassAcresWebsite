import React from 'react';
import cappuccinoPhoto from '../images/cappuccinophoto.jpeg';
import shastaPhoto from '../images/shastaphoto.jpeg'
import Footer from "../components/footer";
import DisplayGoats from "../components/DisplayGoats";
const Bucks = () => {

    const srBucks =[
        {
            name: "Shasta",
            description: 'Shasta is a 2nd generation Mini-Alpine buck, with a friendly personality. He' +
                'has performed very well in the show ring. ',
            awards: '2x Grand Champion AOM Jr. Buck',
            img: shastaPhoto,
            pageLink: 'pages/SingleGoatInfo'
        }
    ]
    const jrBucks =[
        {
            name: "Cappuccino",
            description: 'Cappuccino is a purebred Nigerian Dwarf buck, with a friendly personality. He comes from amazing milk production lines.',
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
