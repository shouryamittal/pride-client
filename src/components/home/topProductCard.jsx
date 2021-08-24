import React from 'react';

function TopProductCard (props) {
    let product = props.product;
    return(
        <div className="popularProductCard text-center">
            <div className="imgContainer d-flex align-items-center justify-content-center">
                <img src="./bat.jpg" alt="Product Image"/>
            </div>
            <div className="title">{product.name}</div>
        </div>
    );
}

export default TopProductCard;