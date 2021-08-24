import React from 'react';
import TopCategoryCard from './topCategoryCard';
import "../../styles/home/topCategoryWidget.scss";

function TopCategoryWidget() {
    let topcat = [{name:"SG Cricket Bat", price: "2,000 - 20,000", currency:"Rs."},
                        {name:"SG Cricket Bat", price: "2,000 - 20,000", currency:"Rs."},
                        {name:"SG Cricket Bat", price: "2,000 - 20,000", currency:"Rs."}]
    return (
        <div className="topCategories">
            <h2 className="widgetHeading">Browse by categories</h2>
            <div className="cardContainer d-flex align-items-center">
                {topcat.map(cat => <TopCategoryCard category={cat}/>)}
            </div> 
        </div>
    );
}

export default TopCategoryWidget;