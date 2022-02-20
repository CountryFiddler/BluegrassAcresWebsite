import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import sapphirePhoto from "../images/sapphirephoto.jpeg";
import strawberryHomePhoto from "../images/strawberryhomephoto.jpeg";
import cappuccinoPhoto from "../images/cappuccinophoto.jpeg";
import Footer from "../components/footer";
import Home from "./Home";
import Goats from "./Goats";
const About = () =>{
    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h1>About Our Farm</h1>
            </div>
            <div className={'aboutPageText'}>
                <p> Bluegrass Acres was founded in 2016 in Sequim, WA. We raise registered Mini-Alpine and Nigerian Dwarf dairy goats, strawberries, and blueberries. We also raise chickens, turkeys, lamb, and pigs for our families meat supply. Every year we also grow a garden that supplies us with veggies year-round. Our vision is to be good stewards of what God has given us and provide nutritious food for our customers.   </p>
            </div>
            <div className='productSelection'>
                <Link className= 'productCard' to='/pages/Berries.js'>
                    <img src={strawberryHomePhoto} width={200} height={200}></img>
                    <p className={'linkText'}>About Our Berries</p></Link>
                <Link className= 'productCard' to='/pages/AboutGoats.js'>
                    <img src={cappuccinoPhoto} width={200} height={200}></img>
                    <p className={'linkText'}>About Our Goats</p></Link>
            </div>
            <Footer/>
        </div>
    );
}
export default About;
