import React from 'react';

function TopCategoryCard(props) {
    let category = props.category;
    return (
        <div className="topCategoryCard text-center">
            <div className="imgContainer d-flex justify-content-center">
                <img src="./bat.jpg" alt={category.name}/>
            </div>
            <div className="priceRange">{category.currency} {category.price}</div>
        </div>
    );
}

export default TopCategoryCard;