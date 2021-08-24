import React from 'react';
import {Row, Col} from 'react-bootstrap';
import "../../styles/footer.scss";

function Footer() {
    return (
        <div className="footer">
            <Row>
                <Col xs={12} sm={4} lg={4}>
                    <img className="logo "src="./logo.jpeg" alt="Pride Sports"/>
                    <p className="companyName">Pride Sports Private Limited</p>
                    <p className="aboutUsTeaser">Pride sports is a cricket sports gear portal. We deal in all stuff related to cricket.</p>
                    <div className="companyAddress">
                        <p>REGISTERED OFFICE:</p>
                        <div>J-83, First Floor, Sriniwas Puri</div>
                        <div>Delhi - 110045</div>
                    </div>
                </Col>
                <Col className={"links"} xs={6} sm={4} lg={4}>
                    <a href="#">About us</a>
                    <a href="#">All Categories</a>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;