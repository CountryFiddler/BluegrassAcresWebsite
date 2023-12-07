import React from 'react';
import {Link} from "react-router-dom";

const ProductSelection = (images) => {
    return (
            <div className='productSection'>
                {images.map((image,i) => (
                    <Link key={i} className= 'productCard' to={image.link}>
                        <img src={image.name} width={200} height={200}></img>
                        <p className={'linkText'}>About our Farm</p></Link>
                ))}

            </div>
    );
};

export default ProductSelection;
