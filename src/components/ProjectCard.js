import {Col, Tab, Row} from 'react-bootstrap';
import NavIcon2 from '../assets/img/nav-icon2.jpeg';

export const ProjectCard = ({ title, description, imgUrl, eventKey, urlLink, github, tech }) => {
    return (
    <Tab.Pane eventKey={eventKey} >
        <Row className="project-imgbx justify-content-center align-items-center">
            <Col sm={12}>
            <a href={urlLink} target="_blank" ><div className='proj-imgbx'>
                    <img className="proj-img" src={imgUrl} />
                    <div className='proj-txtx'>
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div></a>
            </Col>
            <Row style={{"margin": "0 auto"}}>
                <p className="tech-stack-header">Tech Stack:</p>
            </Row>
            <Row>
                <div className="tech-stack">
                    {
                        tech.map((el) => (
                            <p className="tech" >{el}</p>
                        ))
                    }
                </div>
            </Row>
            <Col sm={8} className="project-logo"><a href={github} target="_blank"><img src={NavIcon2} alt="linkedin-logo"/></a></Col>
            <Col sm={4}><a href={github} target="_blank"><p>Link to GitHub Repo</p></a></Col>
        </Row>
    </Tab.Pane>
    )
}