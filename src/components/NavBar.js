import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/nav-icon2.jpeg';
import Logo from '../assets/img/Zac-Cooper-logos_white.png'

export const NavBar = () => {
    const [activeLink, setActivelink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    const onUpdateActiveLink = (value) => {
        setActivelink(value);
    }

    return (
            <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
                <Container>
                    <Navbar.Brand className="navbar-icon" href="#home"><img src={Logo} alt="zac-cooper-logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
                        <Nav.Link id="contact-link" href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/zac-cooper-262652158/" target="_blank"><img src={NavIcon1} alt="linkedin-logo"/></a>
                            <a href="https://github.com/ZACOOPER5G" target="_blank" ><img src={NavIcon2} alt="github-logo"/></a>
                        </div>
                        <a href="mailto:zacooper5g@outlook.com"><button className="vvd"  onClick={() => console.log('connect')}>Let's get in touch!</button></a>
                    </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}