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
const Home = () => {

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
            <div className='homePageImageSlider'>
            <ImageSlider/>
            </div>
            <div className={'homePageAboutSection'}>
                <div className={'homePageAboutSectionContainer'}>
                <h2>About The Farm</h2>
                </div>
                <div className={'homePageAboutSectionContainer'}>
                <p>We are a small family farm located on the beautiful Olympic Peninsula in Sequim WA.</p>
                </div>
            </div>
                    <div className='productSelection'>
                        <Link className= 'productCard' to='pages/About.js'>
                            <img src={sapphirePhoto} width={200} height={200}></img>
                            <p className={'linkText'}>About our Farm</p></Link>
                        <Link className= 'productCard' to='pages/Berries.js'>
                        <img src={strawberryHomePhoto} width={200} height={200}></img>
                        <p className={'linkText'}>Place a berry order</p>
                        </Link>
                        <Link className= 'productCard' to='pages/Goats.js'>
                            <img src={cappuccinoPhoto} width={200} height={200}></img>
                            <p className={'linkText'}>Reserve Your New Goat Today</p>
                        </Link>
            </div>
            <div className={'filler'}></div>
            <Footer/>
        </div>
    );
};

export default Home;
