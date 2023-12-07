import React from 'react';
import ImageSlider from '../components/ImageSlider';
import {Link} from "react-router-dom";
import cappuccinoPhoto from '../images/cappuccinophoto.jpeg';
import sapphirePhoto from '../images/sapphirephoto.jpeg'
import strawberryHomePhoto from '../images/strawberryhomephoto.png'
import milkshakephoto from '../images/milkshakephoto.jpeg'
import aboutFarmPhoto from '../images/aboutourfarmphoto.jpeg'
import Footer from "../components/footer";
import logo from '../images/logo.png';
const Home = () => {

    const images =[
        {
         name: sapphirePhoto,
         link: 'pages/About.js',
        },
        {
            name: strawberryHomePhoto,
            link: 'pages/Berries.js',
        },
        {
            name: cappuccinoPhoto,
            link: 'pages/Goats.js',
        },
    ]
    return (
        <div>
            <div className='homePageImageSlider'>
            <ImageSlider/>
            </div>
            <div className={'homePageAboutSection'}>

                    <img src={logo} width={250} height={250}/>
                <div className={'homePageAboutSectionText'}>
                <h1 className={'homePageAboutSectionTextHeader'}>About The Farm</h1>
                <p className={'serifFont'}>Bluegrass Acres is a small family farm located on the beautiful Olympic Peninsula in Sequim WA. We
                grow the sweetest tasting strawberries and blueberries and raise Mini-Alpine and Nigerian Dwarf goats dairy goats. Our mission
                is to provide you with the healthiest and best tasting produce while sharing with you the beauty and joys of agriculture.</p>
                </div>

            </div>
                    <div className='productSelection'>
                        <Link className= 'productCard' to='pages/About.js'>
                            <img className={'linkPhotos slideLeft'} src={aboutFarmPhoto} width={200} height={200}></img>
                            <p className={'linkText slideLeft'}>About our Farm</p></Link>
                        <Link className= 'productCard' to='pages/PurchaseBerries.js'>
                        <img className={'linkPhotos slideBottom'} src={strawberryHomePhoto} width={200} height={200}></img>
                        <p className={'linkText slideBottom'}>Purchase Berries</p>
                        </Link>
                        <Link className= 'productCard' to='pages/Goats.js'>
                            <img className={'linkPhotos slideRight'} src={milkshakephoto} width={200} height={200}></img>
                            <p className={'linkText slideRight'}>Reserve Your New Goat Today</p>
                        </Link>
            </div>
            <div className={'filler'}></div>
            <Footer/>
        </div>
    );
};

export default Home;
