import React from 'react';
import {Navbar, Container, Image} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {Logo} from '../../../Images/img';

import './header.scss';

const Header = () => {
  return (
    <>
        <div className="navbar_section">
            <Container>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#">
                              <Image className="img-fluid" src={Logo} alt="Logo Image" />
                        </Navbar.Brand>
                        <div className="resume_upload">
                              <NavLink to="https://shorturl.at/suR06" className="button_resume btn btn-outline-primary" target="_blank">Resume</NavLink>
                        </div>
                    </Container>
                </Navbar>
            </Container>    
        </div>  
    </>
  )
}

export default Header;