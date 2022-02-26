import React from 'react';
import ImageSlider from '../components/ImageSlider';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import cappuccinoPhoto from '../images/cappuccinophoto.jpeg';
import sapphirePhoto from '../images/sapphirephoto.jpeg'
import strawberryHomePhoto from '../images/strawberryhomephoto.jpeg'

import Footer from "../components/footer";
const DisplayGoats = (props) => {

    return (
        <div className={'displayGoatsContainer'}>
            <div className='displayGoats'>
                {props.goats.map((goat,i) => (
                    console.log(goat.name),
                    <Link key={i} className= 'goatDisplay' to={{pathname: goat.pageLink}} state={{
                            goat}}
                     >
                        <p className={'westonFontBold'}>{goat.name}</p>
                        <img className={'photos'} src={goat.img} width={200} height={200}></img>
                        <p className={'linkText'}>More Info</p></Link>
                ))}

            </div>
        </div>
    );
};

export default DisplayGoats;
