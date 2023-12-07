import React from 'react';
import {Link} from "react-router-dom";
import milkshakePhoto from '../images/milkshakephoto.jpeg'
import ourHerdPhoto from '../images/ourherdphoto.jpeg'
import Footer from "../components/footer";
const AboutGoats = () =>{
    console.log("On the About Goats Page");
    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h1 className={'westonFont'}>About Our Goats</h1>
            </div>
            <div className={'aboutPageText'}>
                <p> Here at Bluegrass Acres we raise Mini-Alpines and purebred Nigerian Dwarf goats. Mini-Alpines are a cross between the Alpine and Nigerian-Dwarf dairy goats. </p>

                <p> Alpine dairy goats are one of the largest dairy goat breeds as they average their average weight is around 150 Ibs. They are known for high milk production averaging about 2,715 Ibs per year (adga) with about 3.3% butterfat (adga). On the other hand, Nigerian Dwarfs are the smallest dairy goat breed as their average size is about 75 Ibs. They do not produce nearly as much milk as an Alpine goat as the average amount is about 795 Ibs per year. However, Nigerians are known for producing milk with a high butterfat percentage as they average about 6.4% butterfat. </p>

                <p> By crossing the Alpine with the Nigerian Dwarf, one gets a dairy goat in the Mini-Alpine that produces more milk than the Nigerian Dwarf but with more butterfat than the Alpine. In fact, the Mini-Alpine produces about 3/4 of the amount of milk as an Alpine with about 4% butterfat. The best part about these wonderful goats is that they eat about half of what a standard size goat eats while producing almost as much milk. These goats are also very graceful and quite friendly, thus making them a perfect family dairy goat. </p>

                <p> Although Mini-Alpines are our preferred breed, we also raise Nigerian Dwarf goats. We didn’t set out on raising these goats, however, after purchasing a Nigerian Dwarf kid, we fell in love with these goats as they have the most hilarious personalities. Their small size also makes them very easy to handle for anybody and the milk they produce is excellent for cheese, ice cream, and any other dairy products. </p>

                <p> Our herd is tested yearly for CAE, CL, and Johnes. All goats were negative for CAE, CL, and Johnes as of 11-10-2020. </p>
            </div>
            <div className='productSelection'>
                <Link className= 'productCard' to='/pages/OurHerd.js'>
                    <img className={'linkPhotos swingLeft'} src={ourHerdPhoto} width={200} height={200}></img>
                    <p className={'linkText swingLeft'}>Our Herd</p></Link>
                <Link className= 'productCard' to='pages/GoatsForSale.js'>
                    <img className={'linkPhotos swingRight'} src={milkshakePhoto} width={200} height={200}></img>
                    <p className={'linkText swingRight'}>For Sale</p>
                </Link>
            </div>
            <div className={'filler'}/>
            <Footer/>
        </div>
    );
}
export default AboutGoats;
