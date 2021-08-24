import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import "../../styles/header.scss";

function Header() {
    return(
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img src="./logo.jpeg" className="brandLogo"/>
                    <span className="brandName">Pride Sports</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;