import React from 'react';
import TopProductCard from './topProductCard';
import "../../styles/home/topProductsWidget.scss";

function TopProductsWidget(props) {
    let topProducts = [{name:"SG Cricket Bat", price: "2322", currency:"Rs."},
                        {name:"SG Cricket Bat", price: "2322", currency:"Rs."},
                        {name:"SG Cricket Bat", price: "2322", currency:"Rs."}]
    return (
        <div className="topProducts col-12">
            <h2>Popular these days</h2>
            <div className="cardContainer d-flex">
                {
                    topProducts.map(product => {
                        return (
                            <TopProductCard product={product}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TopProductsWidget;