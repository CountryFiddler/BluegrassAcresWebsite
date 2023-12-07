import React from 'react';
import {Link} from "react-router-dom";
import cappuccinoPhoto from '../images/cappuccinophoto.jpeg';
import sapphirePhoto from '../images/sapphirephoto.jpeg'
import strawberryHomePhoto from '../images/strawberryhomephoto.jpeg'
import milkshakePhoto from '../images/milkshakephoto.jpeg'
import Footer from "../components/footer";
const OurHerd = () => {

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
                    <img className={'linkPhotos swingLeft'} src={sapphirePhoto} width={200} height={200}></img>
                    <p className={'linkText swingLeft'}>Does</p></Link>
                <Link className= 'productCard' to='/pages/Bucks.js'>
                    <img className={'linkPhotos swingTop'} src={cappuccinoPhoto} width={200} height={200}></img>
                    <p className={'linkText swingTop'}>Bucks</p>
                </Link>
                <Link className= 'productCard' to='/pages/OurHerd.js/GoatsForSale.js'>
                    <img className={'linkPhotos swingRight'} src={milkshakePhoto} width={200} height={200}></img>
                    <p className={'linkText swingRight'}>For Sale</p>
                </Link>
            </div>
            <Footer/>
        </div>
    );
};

export default OurHerd;
