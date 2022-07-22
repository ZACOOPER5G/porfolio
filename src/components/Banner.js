import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Header from '../assets/img/my-project.png'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'Tech Lover', 'Web Designer', 'Lifelong learner', 'Software Engineer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(500 - Math.random() * 200)
    const period = 100;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta)
        
        return () => {
            clearInterval(ticker)
        }
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(180);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col className="personal-info" xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{`I'm Zac.`}</h1>
                        <h2><span className="wrap">...I am a  {text}</span></h2>
                        <div>
                        <p className="about">I absolutely love the world of technology and I spend most of my spare time learning new technologies, building web applications, and sometimes I surf.</p>
                        <p>I'd love to chat with you to see how we could potentially work together, so don't be afraid to reach out.</p>
                        </div>
                        <button onClick={() => console.log('connect')}>Let's get in touch! <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={Header} alt="Header image" className='header-image d-none d-md-block' href={''} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}