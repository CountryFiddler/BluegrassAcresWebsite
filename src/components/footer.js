import React from 'react';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
const Footer = () =>{
    return (
        <div className={'footerContainer'}>
        <div className={'footer'}>
            <div className={'footerItems'}>
                <h4 className={'footerText'}>© Copyright 2022. Bluegrass Acres, LLC. All Rights Reserved.</h4>
            </div>
            <div className={'footerItems'}>
                <h4 className={'footerText'}>Phone: (360)-477-3547</h4>
            </div>
            <div className={'footerItems'}>
                <h4 className={'footerText'}>Email: agordash@gmail.com</h4>
            </div>
            <div className={'footerItems'}>
            <div className={'socialMediaFooterIcons'}>
                <img  src={facebook} width={50} height={50}/>
                <img className={'socialMediaFooterIcon'} src={instagram} width={50} height={50}/>
            </div>
            </div>
        </div>
        </div>
    );
}
export default Footer;
