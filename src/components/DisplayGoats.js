import React from 'react';
import { Link} from "react-router-dom";

const DisplayGoats = (props) => {

    return (
        <div className={'displayGoatsContainer'}>
            <div className='displayGoats'>
                {props.goats.map((goat,i) => (
                    console.log(goat.name),
                    <Link key={i} className= 'goatDisplay' to={{pathname: goat.pageLink}} state={{
                            goat}}
                     >
                        <p className={'westonFontBold'}>{goat.name}</p>
                        <img className={'linkPhotos swingTop'} src={goat.img} width={200} height={200}></img>
                        <p className={'linkText swingTop'}>More Info</p></Link>
                ))}

            </div>
        </div>
    );
};

export default DisplayGoats;
