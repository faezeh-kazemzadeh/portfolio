import React from 'react';
// import Router  from '../../Router/Router';
// import {Link} from 'react-scroll';
import { Container ,Nav , Navbar as Navboot, NavDropdown} from 'react-bootstrap';
import styles from './Navbar.module.css';
const Navbar = () => {
    return (
    <Navboot  expand="lg" fixed="top" className={styles.navbar} >
    <Container>
      <Navboot.Brand href="#home" className={styles.brand}>  <span>&#60;</span> Faezeh Kazemzadeh <span>&#47; &#62;</span></Navboot.Brand>
      <Navboot.Toggle aria-controls="basic-navbar-nav" />
      <Navboot.Collapse id="basic-navbar-nav" >
        <Nav className="ms-auto">
          <Nav.Link className={styles.navLink} href="#hero">Home</Nav.Link>
          <Nav.Link className={styles.navLink} href="#services">Services</Nav.Link>
          <Nav.Link className={styles.navLink} href="#skills">Skills</Nav.Link>
          <Nav.Link className={styles.navLink} href="#works">Last work</Nav.Link>
          <Nav.Link className={styles.navLink} href="#about">About me</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navboot.Collapse>
    </Container>
  </Navboot>
    );
};

export default Navbar;