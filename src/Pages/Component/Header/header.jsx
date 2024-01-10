import React from 'react';
import {Navbar, Container, Image, Button} from 'react-bootstrap';
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
                            <Button variant="outline-primary" className="button_resume">Resume</Button>
                        </div>
                    </Container>
                </Navbar>
            </Container>    
        </div>  
    </>
  )
}

export default Header;