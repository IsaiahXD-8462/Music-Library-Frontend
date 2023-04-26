import React from 'react';

const ImagePresenter = ({ image, altText }) => {
    return ( 
        <div>
            <p>Live Life</p>
            <img src={image} alt="{altText}" />
        </div>
     );
}
 
export default ImagePresenter;