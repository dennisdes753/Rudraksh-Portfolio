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
                              <NavLink to="https://drive.google.com/drive/folders/1AC9wgoXhywxsYLVlTUHA6fsyXqWG0y3P" className="button_resume btn btn-outline-primary" target="_blank">Resume</NavLink>
                        </div>
                    </Container>
                </Navbar>
            </Container>    
        </div>  
    </>
  )
}

export default Header;