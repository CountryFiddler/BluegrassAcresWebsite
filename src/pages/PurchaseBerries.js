import React from 'react';
import {Link} from "react-router-dom";
import strawberryHomePhoto from "../images/strawberryhomephoto.png";
import Footer from "../components/footer";
const PurchaseBerries = () =>{
    console.log("On the About Berries Page");
    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h1 className={'westonFont'}>Purchase Our Berries</h1>
            </div>
            <div className={'aboutPageHeader'}>
                <p className={'purchaseBerriesText'}> Our berries are for sale at our farm or the farmer's markets listed below:  </p>

                <p className={'farmersMarketText'}> Sequim Farmer's Market </p>

                <p className={'farmersMarketText'}> Port Angeles Farmer's Market </p>

            </div>
            <div className='productSelection'>
                <Link className= 'productCard' to='/pages/Berries.js'>
                    <img className={'linkPhotos swingTop'} src={strawberryHomePhoto} width={200} height={200}></img>
                    <p className={'linkText swingTop'}>About Our Berries</p></Link>
            </div>
            <Footer/>
        </div>
    );
}
export default PurchaseBerries;
