import React from 'react';
import {Link} from "react-router-dom";
import aboutGoats from '../images/aboutourgoats.jpeg'
import ourHerdPhoto from '../images/ourherdphoto.jpeg'
import milkshakePhoto from '../images/milkshakephoto.jpeg'
import kiddingPhoto from '../images/kiddingschedulephoto.jpeg'
import Footer from "../components/footer";

const Goats = () =>{
    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h1 className={'westonFont'}>Mini-Alpine and Nigerian Dwarf Dairy Goats</h1>
            </div>
    <div className='productSelection'>
        <Link className= 'productCard' to='/pages/OurHerd.js'>
            <img className={'linkPhotos scaleCenter'} src={ourHerdPhoto} width={200} height={200}></img>
            <p className={'linkText'}>Our Herd</p></Link>
        <Link className= 'productCard' to={'/pages/AboutGoats.js'}>
            <img className={'linkPhotos scaleCenter'} src={aboutGoats} width={200} height={200}></img>
            <p className={'linkText'}>About Our Goats</p>
        </Link>
        <Link className= 'productCard' to='/pages/GoatsForSale.js'>
            <img className={'linkPhotos scaleCenter'} src={milkshakePhoto} width={200} height={200}></img>
            <p className={'linkText'}>For Sale</p>
        </Link>
            <Link className= 'productCard' to='/pages/KiddingSchedule.js'>
                <img className={'linkPhotos scaleCenter'} src={kiddingPhoto} width={200} height={200}></img>
                <p className={'linkText'}>2022 Kidding Schedule</p></Link>


    </div>
            <Footer/>
        </div>
    );
}
export default Goats;
