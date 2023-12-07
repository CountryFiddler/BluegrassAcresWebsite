import React from 'react';
import {Link, useLocation} from "react-router-dom";
import Footer from "../components/footer";

function SingleGoatInfo () {
    const location = useLocation();
    const goat = location.state.goat;
    console.log(location.state);
    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h1 className={'westonFont'}>{goat.name}</h1>
            </div>
            <div className='displayGoatImages'>
            <img className={'nonLinkPhotos  scaleCenter'} src={goat.img} width={200} height={200}></img>
            </div>
            <div className='displayDescriptionAwardsContainer'>
                <h3 className={'descriptionAwardsContainerDisplay'}>Description</h3>
                <h3 className={'descriptionAwardsContainerDisplay'}>Awards</h3>
            </div>
            <div className='displayDescriptionAwards'>
                    <p className={'descriptionAwardsDisplay'}>{goat.description}</p>
                <p className={'descriptionAwardsDisplay'}>{goat.awards}</p>
            </div>
            <p className={'goatDisplay'}>If interested in a kid from {goat.name}, please check our for sale page</p>
            <Link className={'goatsForSaleLink'} to='pages/GoatsForSale.js'>
                <p className={'goatsForSaleLinkText'}>For Sale Page</p>
            </Link>
            <Footer/>
        </div>
    );
};

export default SingleGoatInfo;
