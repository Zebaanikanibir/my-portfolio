import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className=" bg-light" />
                
                <Navbar.Collapse className="but"  id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <h3 className="name"> ZEBA ANIKA NIBIR</h3>
                    </Nav>
                    <Nav className="ms-auto">
                        <Link className="nav-link mr-5 ms-5 " to="/home"><span className="nav1">HOME</span></Link>
                        <Link className="nav-link mr-5 ms-5" to="/blogs"><span className="nav1">BLOGS</span></Link>
                        <Link className="nav-link mr-5  ms-5" to="/projects"><span className="nav1">PROJECTS</span></Link>
                        <Link className="nav-link mr-5  ms-5" to="/resume"><span className="nav1">RESUME</span></Link>
                        <Link className="nav-link  mr-5  ms-5" to="/contact"><span className="nav1">CONTACT</span></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;