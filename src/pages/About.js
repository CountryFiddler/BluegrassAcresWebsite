import React from 'react';
import {Link} from "react-router-dom";
import strawberryHomePhoto from "../images/strawberryhomephoto.png";
import cappuccinoPhoto from "../images/cappuccinophoto.jpeg";
import Footer from "../components/footer";
const About = () =>{
    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h1 className={'westonFont'}>About Our Farm</h1>
            </div>
            <div className={'aboutPageText'}>
                <p> Bluegrass Acres was founded in 2016 in Sequim, WA. We raise registered Mini-Alpine and Nigerian Dwarf dairy goats, strawberries, and blueberries. We also raise chickens, turkeys, lamb, and pigs for our families meat supply. Every year we also grow a garden that supplies us with veggies year-round. Our vision is to be good stewards of what God has given us and provide nutritious food for our customers.   </p>
            </div>
            <div className='productSelection'>
                <Link className= 'productCard' to='/pages/Berries.js'>
                    <img className={'linkPhotos slideLeft'} src={strawberryHomePhoto} width={200} height={200}></img>
                    <p className={'linkText slideLeft'}>About Our Berries</p></Link>
                <Link className= 'productCard' to='/pages/AboutGoats.js'>
                    <img className={'linkPhotos slideRight'} src={cappuccinoPhoto} width={200} height={200}></img>
                    <p className={'linkText slideRight'}>About Our Goats</p></Link>
            </div>
            <Footer/>
        </div>
    );
}
export default About;
