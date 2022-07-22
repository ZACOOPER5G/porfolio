import {Col, Tab, Row} from 'react-bootstrap';

export const ProjectCard = ({title, description, imgUrl, eventKey, urlLink}) => {
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
        </Row>
    </Tab.Pane>
    )
}
