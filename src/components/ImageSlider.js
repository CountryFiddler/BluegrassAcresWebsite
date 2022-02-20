import ImageGallery from 'react-image-gallery';
import SimpleImageSlider from "react-simple-image-slider";
import {useEffect, useState} from "react";
import cappucinoSliderPhoto from '../images/cappucinosliderphoto.jpeg';
import sheepPhoto from '../images/sheepphoto.jpeg';
import pigPhoto from '../images/pigphoto.jpeg';


const images = [
    {url: cappucinoSliderPhoto},
    {url: sheepPhoto},
    {url: pigPhoto},
];



const ImageSlider = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = (e) => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    })

    function checkWidth (width) {
        if (width > 1200) {
            width = 1200;
        } else {
            width = window.innerWidth;
        }
        return width
    }
    function checkHeight (height) {
        if (height > 450) {
            height = 450;
        } else {
            height = window.innerWidth/2.5;
        }
        return height
    }
    return (
        <div className="homePageImageSlider">
                <SimpleImageSlider
                    width={checkWidth(window.innerWidth)}
                    height={checkHeight(window.innerWidth/2.5)}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                />
        </div>
    )
}

export default ImageSlider;
