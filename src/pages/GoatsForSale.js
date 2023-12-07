import React from 'react';
import Footer from "../components/footer";
const GoatsForSale = () => {

    return (
        <div>
            <div className={'aboutPageHeader'}>
                <h2 className={'westonFont'}>For Sale</h2>
            </div>
            <div className={'noGoatsForSaleText'}>
                <p>We currently do not have any goats for sale at this point. We have kids for sale every spring
                and potentially a senior doe from time to time</p>
            </div>
            <Footer/>
        </div>
    );
};

export default GoatsForSale;
