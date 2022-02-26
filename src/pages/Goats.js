import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import sapphirePhoto from "../images/sapphirephoto.jpeg";
import strawberryHomePhoto from "../images/strawberryhomephoto.jpeg";
import cappuccinoPhoto from "../images/cappuccinophoto.jpeg";
import Footer from "../components/footer";
import AboutGoats from "./AboutGoats";

const Goats = () =>{
    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h1 className={'westonFont'}>Mini-Alpine and Nigerian Dwarf Dairy Goats</h1>
            </div>
    <div className='productSelection'>
        <Link className= 'productCard' to='/pages/OurHerd.js'>
            <img className={'photos'} src={sapphirePhoto} width={200} height={200}></img>
            <p className={'linkText'}>Our Herd</p></Link>
        <Link className= 'productCard' to={'/pages/AboutGoats.js'}>
            <img className={'photos'} src={sapphirePhoto} width={200} height={200}></img>
            <p className={'linkText'}>About Our Goats</p>
        </Link>
        <Link className= 'productCard' to='/pages/GoatsForSale.js'>
            <img className={'photos'} src={cappuccinoPhoto} width={200} height={200}></img>
            <p className={'linkText'}>For Sale</p>
        </Link>
            <Link className= 'productCard' to='/pages/KiddingSchedule.js'>
                <img className={'photos'} src={cappuccinoPhoto} width={200} height={200}></img>
                <p className={'linkText'}>2022 Kidding Schedule</p></Link>


    </div>
            <Footer/>
        </div>
    );
}
export default Goats;
