import React from 'react';
import ImageSlider from '../components/ImageSlider';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import cappuccinoPhoto from '../images/cappuccinophoto.jpeg';
import sapphirePhoto from '../images/sapphirephoto.jpeg'
import strawberryHomePhoto from '../images/strawberryhomephoto.jpeg'

import Footer from "../components/footer";
const ProductSelection = (images) => {
    return (
            <div className='productSection'>
                {images.map((image,i) => (
                    <Link key={i} className= 'productCard' to={image.link}>
                        <img src={image.name} width={200} height={200}></img>
                        <p className={'linkText'}>About our Farm</p></Link>
                ))}

            </div>
    );
};

export default ProductSelection;
