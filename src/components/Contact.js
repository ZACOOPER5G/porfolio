import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../assets/img/footer-image.png';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    
    const [buttonText, setButtonText] = useState('Send Message');

    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
             },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send Message");
        const {code, status} = await response.json();
        console.log( {code, status})
        if (code === 200) {
            setStatus({success: true, message: "Message sent successfully"})
        } else {
            setStatus({success: false, message: "Something went wrong, please try again"})
        }
        setFormDetails(formInitialDetails);
    };

    return (
        <section className="contact align-contents-center" id="contact" >
            <Container >
                <Row className="align-items-center" >
                    <Col md={6}>
                        <img src={image} alt="Contact Us" />
                    </Col>
                    <Col md={6} >
                        <h2>Enough about me. <a href="mailto:zacooper5g@outlook.com">Let's chat</a> about how we can work together.</h2>
                        <form onSubmit={handleSubmit} >
                            <Row>
                                <Col sm={6} className="px-2" >
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-2" >
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-2" >
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-2" >
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col sm={12} className="px-2" >
                                    <input type="text" value={formDetails.company} placeholder="Company" onChange={(e) => onFormUpdate('company', e.target.value)} />
                                </Col>
                                <Col sm={12} className="px-2" >
                                    <textarea type="text" row="6" value={formDetails.message} placeholder="Enter your message here..." onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit" ><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}