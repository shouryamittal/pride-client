import React from 'react';
import { Container, Row} from 'react-bootstrap';
import OfferBanner from './offerBanner';
import "../../styles/home/home.scss";
import TopProductsWidget from './topProductsWidget';
import TopCategoryWidget from './topCategoryWidget';

function Home() {
    return(
        <div className="home">
            <OfferBanner />
            <Container>
                <Row>
                    <TopProductsWidget/>
                    <TopCategoryWidget/>
                </Row>
            </Container>
        </div>
    )
}

export default Home;