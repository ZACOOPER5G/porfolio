import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/Zac-Cooper-logos_white.png';
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/nav-icon2.jpeg';

export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col className="logo" sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/zac-cooper-262652158/" target="_blank"><img src={NavIcon1} alt="github-logo"/></a>
                            <a href="https://github.com/ZACOOPER5G" target="_blank"><img src={NavIcon2} alt="linkedin-logo"/></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved by Zac Cooper</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}